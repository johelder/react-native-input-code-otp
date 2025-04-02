import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type TextInputOTPGroupProps = {
  groupStyles?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
