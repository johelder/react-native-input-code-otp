import { View, StyleSheet } from 'react-native';
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
    backgroundColor: '#030712',
    borderRadius: 15,
  },
});
