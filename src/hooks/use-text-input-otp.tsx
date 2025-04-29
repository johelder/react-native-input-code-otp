import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import type { TextInput } from 'react-native';
import type {
  TextInputOTPContextProps,
  TextInputOTPProviderProps,
} from '../types';

const TextInputOTPContext = createContext<TextInputOTPContextProps>({
  code: '',
  currentIndex: 0,
  inputRef: { current: null },
  handleChangeText: () => {},
  handlePress: () => {},
  setValue: () => {},
  focus: () => {},
  blur: () => {},
  clear: () => {},
  caretHidden: false,
});

export function TextInputOTPProvider({
  autoFocus = true,
  maxLength,
  value = '',
  onFilled,
  onChangeText,
  caretHidden = false,
  caretColor,
  children,
}: TextInputOTPProviderProps) {
  const [code, setCode] = useState(value);
  const [currentIndex, setCurrentIndex] = useState(() => (autoFocus ? 0 : -1));
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = useCallback(
    (text: string) => {
      if (text.length > maxLength) {
        return;
      }

      setCode(text);
      onChangeText?.(text);

      if (text.length === maxLength) {
        onFilled?.(text);
      }

      if (text.length < maxLength) {
        setCurrentIndex(text.length);
      }
    },
    [maxLength, onChangeText, onFilled]
  );

  const handlePress = useCallback(() => {
    setCurrentIndex(code.length);
    inputRef.current?.focus();
  }, [code.length]);

  const setValue = useCallback(
    (text: string) => {
      const filledCode =
        text.length > maxLength ? text.slice(0, maxLength) : text;
      setCode(filledCode);
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
    setCode('');
    setCurrentIndex(0);
  }, []);

  const contextValue = useMemo(
    () => ({
      code: value || code,
      currentIndex,
      inputRef,
      handleChangeText,
      handlePress,
      setValue,
      focus,
      blur,
      clear,
      caretHidden,
      caretColor,
    }),
    [
      clear,
      code,
      currentIndex,
      handleChangeText,
      handlePress,
      setValue,
      value,
      caretHidden,
      caretColor,
    ]
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
