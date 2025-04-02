import { View, StyleSheet } from 'react-native';
import { useThemeColor } from '../theme/use-theme-color';
import { theme } from '../theme/theme';
import type { TextInputOTPSeparatorProps } from '../types';

export function TextInputOTPSeparator({
  separatorStyles,
}: TextInputOTPSeparatorProps) {
  const backgroundColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorDarkGrey,
  });

  return (
    <View
      style={StyleSheet.flatten([
        styles.separator,
        { backgroundColor },
        separatorStyles,
      ])}
    />
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
