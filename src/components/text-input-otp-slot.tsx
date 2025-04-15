import { memo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { AnimatedCaret } from './animated-caret';
import { useTextInputOTP } from '../hooks/use-text-input-otp';
import { useSlotBorderStyles } from '../hooks/use-slot-border-styles';
import { SLOT_HEIGHT, SLOT_WIDTH } from '../constants';
import type {
  TextInputOTPSlotInternalProps,
  TextInputOTPSlotProps,
} from '../types';

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
    color: '#030712',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
