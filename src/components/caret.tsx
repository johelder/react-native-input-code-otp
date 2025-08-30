import { useEffect, useRef } from 'react';
import { StyleSheet, Animated, Platform } from 'react-native';
import { useTextInputOTP } from '../hooks/use-text-input-otp';
import { useThemeColor } from '../hooks/use-theme-color';
import { theme } from '../theme';

export function Caret() {
  const opacity = useRef(new Animated.Value(0)).current;
  const useNativeDriver = Platform.OS === 'ios' || Platform.OS === 'android';
  const { caretColor } = useTextInputOTP();
  const defaultBackgroundColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver,
        }),
      ])
    ).start();
  }, [opacity]);

  return (
    <Animated.View
      testID="caret"
      style={[
        styles.caret,
        { opacity, backgroundColor: caretColor ?? defaultBackgroundColor },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  caret: {
    width: theme.space2,
    height: theme.space16,
    borderRadius: theme.borderRadius16,
  },
});
