import { useEffect } from 'react';
import { StyleSheet, Animated, useAnimatedValue } from 'react-native';

export function AnimatedCaret() {
  const opacity = useAnimatedValue(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  return <Animated.View style={[styles.caret, { opacity }]} />;
}

const styles = StyleSheet.create({
  caret: {
    width: 2,
    height: 16,
    borderRadius: 16,
    backgroundColor: '#030712',
  },
});
