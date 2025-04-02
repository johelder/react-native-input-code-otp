import { memo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTextInputOTP } from '../hooks/use-text-input-otp';
import type {
  TextInputOTPSlotInternalProps,
  TextInputOTPSlotProps,
} from '../types';
import { useSlotBorderStyles } from '../hooks/use-slot-border-styles';
import { useThemeColor } from '../theme/use-theme-color';
import { theme } from '../theme/theme';
import { AnimatedCaret } from './animated-caret';
import { SLOT_HEIGHT, SLOT_WIDTH } from '../constants';

function TextInputOTPSlotComponent({
  index,
  isFirst,
  isLast,
  focusedSlotStyles,
  focusedSlotTextStyles,
  slotStyles,
  slotTextStyles,
  ...rest
}: TextInputOTPSlotProps & TextInputOTPSlotInternalProps) {
  const { code, currentIndex, handlePress } = useTextInputOTP();
  const isFocused = currentIndex === index;
  const borderStyles = useSlotBorderStyles({ isFocused, isFirst, isLast });
  const slotTextColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });

  return (
    <Pressable
      style={StyleSheet.flatten([
        styles.slot,
        borderStyles,
        isFocused ? focusedSlotStyles : slotStyles,
      ])}
      onPress={() => handlePress(index)}
      {...rest}
    >
      {code[index] && (
        <Text
          style={StyleSheet.flatten([
            styles.slotText,
            { color: slotTextColor },
            isFocused ? focusedSlotTextStyles : slotTextStyles,
          ])}
        >
          {code[index]}
        </Text>
      )}

      {isFocused && !code[index] && <AnimatedCaret />}
    </Pressable>
  );
}

export const TextInputOTPSlot = memo(TextInputOTPSlotComponent);

const styles = StyleSheet.create({
  slot: {
    width: SLOT_WIDTH,
    height: SLOT_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slotText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
