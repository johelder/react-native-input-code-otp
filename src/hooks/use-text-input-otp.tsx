import {
  createContext,
  useContext,
  useRef,
  useState,
  type PropsWithChildren,
} from 'react';
import type {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';
import { BACKSPACE_KEY } from '../constants';
import type { TextInputOTPContextProps, TextInputOTPProps } from '../types';

const TextInputOTPContext = createContext<TextInputOTPContextProps>({
  code: [],
  currentIndex: 0,
  inputRef: { current: null },
  handleKeyPress: () => {},
  handleChangeText: () => {},
  handlePress: () => {},
  setValue: () => {},
  focus: () => {},
  blur: () => {},
  clear: () => {},
});

export function TextInputOTPProvider({
  maxLength,
  onFilled,
  children,
}: PropsWithChildren<Pick<TextInputOTPProps, 'maxLength' | 'onFilled'>>) {
  const [code, setCode] = useState(Array(maxLength).fill(''));
  const [currentIndex, setCurrentIndex] = useState(0);
  const inputRef = useRef<TextInput>(null);

  function updateCodeAtIndex(index: number, value: string) {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    return newCode;
  }

  function handleKeyPress(
    event: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) {
    const { key } = event.nativeEvent;

    if (key !== BACKSPACE_KEY) {
      return;
    }

    if (!code[currentIndex] && currentIndex > 0) {
      updateCodeAtIndex(currentIndex - 1, '');
      setCurrentIndex((prev) => prev - 1);
      return;
    }

    updateCodeAtIndex(currentIndex, '');
  }

  function handleChangeText(text: string) {
    if (text.length > 1) {
      return;
    }

    const updatedCode = updateCodeAtIndex(currentIndex, text);

    if (currentIndex < maxLength - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    const finalCode = [...updatedCode].join('');

    if (finalCode.length === maxLength) {
      onFilled?.(finalCode);
    }
  }

  function handlePress(index: number) {
    setCurrentIndex(index);
    inputRef.current?.focus();
  }

  function setValue(text: string) {
    const value = text.length > maxLength ? text.slice(0, maxLength) : text;
    setCode(Array.from(value));
    setCurrentIndex(maxLength - 1);
  }

  function focus() {
    inputRef.current?.focus();
  }

  function blur() {
    inputRef.current?.blur();
  }

  function clear() {
    setCode(Array(maxLength).fill(''));
    setCurrentIndex(0);
  }

  return (
    <TextInputOTPContext.Provider
      value={{
        code,
        currentIndex,
        inputRef,
        handleKeyPress,
        handleChangeText,
        handlePress,
        setValue,
        focus,
        blur,
        clear,
      }}
    >
      {children}
    </TextInputOTPContext.Provider>
  );
}

export function useTextInputOTP() {
  return useContext(TextInputOTPContext);
}
