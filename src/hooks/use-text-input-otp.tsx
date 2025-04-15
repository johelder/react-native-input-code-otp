import {
  createContext,
  useCallback,
  useContext,
  useMemo,
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
  autoFocus = true,
  maxLength,
  onFilled,
  children,
}: PropsWithChildren<
  Pick<TextInputOTPProps, 'autoFocus' | 'maxLength' | 'onFilled'>
>) {
  const [code, setCode] = useState(Array(maxLength).fill(''));
  const [currentIndex, setCurrentIndex] = useState(autoFocus ? 0 : -1);
  const inputRef = useRef<TextInput>(null);

  const updateCodeAtIndex = useCallback(
    (index: number, value: string) => {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      return newCode;
    },
    [code]
  );

  const handleKeyPress = useCallback(
    (event: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
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
    },
    [code, currentIndex, updateCodeAtIndex]
  );

  const handleChangeText = useCallback(
    (text: string) => {
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
    },
    [currentIndex, maxLength, onFilled, updateCodeAtIndex]
  );

  function handlePress(index: number) {
    setCurrentIndex(index);
    inputRef.current?.focus();
  }

  const setValue = useCallback(
    (text: string) => {
      const value = text.length > maxLength ? text.slice(0, maxLength) : text;
      setCode(Array.from(value));
      setCurrentIndex(maxLength - 1);
    },
    [maxLength]
  );

  function focus() {
    inputRef.current?.focus();
  }

  function blur() {
    inputRef.current?.blur();
  }

  const clear = useCallback(() => {
    setCode(Array(maxLength).fill(''));
    setCurrentIndex(0);
  }, [maxLength]);

  const contextValue = useMemo(
    () => ({
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
    }),
    [clear, code, currentIndex, handleChangeText, handleKeyPress, setValue]
  );

  return (
    <TextInputOTPContext.Provider value={contextValue}>
      {children}
    </TextInputOTPContext.Provider>
  );
}

export function useTextInputOTP() {
  return useContext(TextInputOTPContext);
}
