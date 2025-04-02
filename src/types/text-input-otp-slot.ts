import type {
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

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
