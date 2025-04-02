import type { StyleProp, ViewProps, ViewStyle } from 'react-native';

export type TextInputOTPSeparatorProps = {
  separatorStyles?: StyleProp<ViewStyle>;
} & Omit<ViewProps, 'style'>;
