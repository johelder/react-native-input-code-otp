import { useEffect, useRef } from 'react';
import { StyleSheet, Animated } from 'react-native';
import { DEFAULT_DARK_COLOR } from '../constants';
import { useTextInputOTP } from '../hooks/use-text-input-otp';

export function Caret() {
  const opacity = useRef(new Animated.Value(0)).current;
  const { caretColor } = useTextInputOTP();

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

  return (
    <Animated.View
      testID="caret"
      style={[
        styles.caret,
        { opacity, backgroundColor: caretColor ?? DEFAULT_DARK_COLOR },
      ]}
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
