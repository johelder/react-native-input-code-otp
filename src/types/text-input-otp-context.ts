import type { RefObject } from 'react';
import type {
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
} from 'react-native';

export type TextInputOTPContextProps = {
  code: string[];
  currentIndex: number;
  inputRef: RefObject<TextInput | null>;
  handleKeyPress: (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => void;
  handleChangeText: (text: string) => void;
  handlePress: (index: number) => void;
  setValue: (text: string) => void;
  focus: () => void;
  blur: () => void;
  clear: () => void;
};
