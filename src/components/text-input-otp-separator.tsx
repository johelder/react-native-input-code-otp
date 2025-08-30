import { View, StyleSheet } from 'react-native';
import type { TextInputOTPSeparatorProps } from '../types';
import { useThemeColor } from '../hooks/use-theme-color';
import { theme } from '../theme';

export function TextInputOTPSeparator({
  separatorStyles,
}: TextInputOTPSeparatorProps) {
  const defaultBackgroundColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });

  return (
    <View
      style={StyleSheet.flatten([
        styles.separator,
        { backgroundColor: defaultBackgroundColor },
        separatorStyles,
      ])}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    width: theme.space10,
    height: theme.space4,
    borderRadius: theme.space16,
  },
});
