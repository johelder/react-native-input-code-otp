import { StyleSheet, Animated, useAnimatedValue } from 'react-native';
import { useThemeColor } from '../theme/use-theme-color';
import { theme } from '../theme/theme';
import { useEffect } from 'react';

export function AnimatedCaret() {
  const backgroundColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });
  const opacityValue = useAnimatedValue(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacityValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacityValue, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacityValue]);

  return (
    <Animated.View
      style={[styles.caret, { backgroundColor, opacity: opacityValue }]}
    />
  );
}

const styles = StyleSheet.create({
  caret: {
    width: 2,
    height: 16,
    borderRadius: 16,
  },
});
