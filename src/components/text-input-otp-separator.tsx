import { View, StyleSheet } from 'react-native';
import { DEFAULT_DARK_COLOR } from '../constants';
import type { TextInputOTPSeparatorProps } from '../types';

export function TextInputOTPSeparator({
  separatorStyles,
}: TextInputOTPSeparatorProps) {
  return (
    <View style={StyleSheet.flatten([styles.separator, separatorStyles])} />
  );
}

const styles = StyleSheet.create({
  separator: {
    width: 10,
    height: 4,
    backgroundColor: DEFAULT_DARK_COLOR,
    borderRadius: 15,
  },
});
