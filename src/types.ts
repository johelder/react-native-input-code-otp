import type { ReactNode, RefObject } from 'react';
import type {
  PressableProps,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export type TextInputOTPContextProps = {
  code: string;
  currentIndex: number;
  inputRef: RefObject<TextInput | null>;
  handleChangeText: (text: string) => void;
  handlePress: () => void;
  setValue: (text: string) => void;
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export type TextInputOTPGroupProps = {
  groupStyles?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;

export type TextInputOTPRef = {
  setValue: (text: string) => void;
  focus: () => void;
  blur: () => void;
  clear: () => void;
};

export type TextInputOTPSeparatorProps = {
  separatorStyles?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;

export type TextInputOTPSlotProps = {
  index: number;
  focusedSlotStyles?: StyleProp<ViewStyle>;
  slotStyles?: StyleProp<ViewStyle>;
  focusedSlotTextStyles?: StyleProp<TextStyle>;
  slotTextStyles?: StyleProp<TextStyle>;
} & PressableProps;

export type TextInputOTPSlotInternalProps = {
  isFirst?: boolean;
  isLast?: boolean;
};

export type UseSlotBorderStylesProps = {
  isFocused: boolean;
  isFirst?: boolean;
  isLast?: boolean;
};

export type TextInputOTPProps = {
  children: ReactNode;
  autoFocus?: boolean;
  maxLength: number;
  onFilled?: (text: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
} & Omit<TextInputProps, 'style'>;
