import type { ReactNode } from 'react';
import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type TextInputOTPProps = {
  children: ReactNode;
  autoFocus?: boolean;
  maxLength: number;
  onFilled?: (text: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
} & Omit<TextInputProps, 'style'>;
