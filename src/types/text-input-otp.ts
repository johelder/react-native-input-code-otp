import type { ReactNode } from 'react';
import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type TextInputOTPProps = {
  children: ReactNode;
  maxLength: number;
  onFilled?: (text: string) => void;
  containerStyles?: StyleProp<ViewStyle>;
} & Omit<TextInputProps, 'style'>;
