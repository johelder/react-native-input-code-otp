import { memo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { Caret } from './caret';
import { useTextInputOTP } from '../hooks/use-text-input-otp';
import { useSlotBorderStyles } from '../hooks/use-slot-border-styles';
import { DEFAULT_DARK_COLOR, SLOT_HEIGHT, SLOT_WIDTH } from '../constants';
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
  const { code, currentIndex, handlePress, caretHidden } = useTextInputOTP();
  const isFocused = currentIndex === index;
  const borderStyles = useSlotBorderStyles({ isFocused, isFirst, isLast });
  const shouldRenderCaret = isFocused && !code[index] && !caretHidden;

  return (
    <Pressable
      onPress={handlePress}
      style={StyleSheet.flatten([
        styles.slot,
        borderStyles,
        isFocused ? focusedSlotStyles : slotStyles,
      ])}
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

      {shouldRenderCaret && <Caret />}
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
    color: DEFAULT_DARK_COLOR,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
