import { memo } from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useTextInputOTP } from '../hooks/use-text-input-otp';
import { useSlotBorderStyles } from '../hooks/use-slot-border-styles';
import { useThemeColor } from '../hooks/use-theme-color';
import { SLOT_HEIGHT, SLOT_WIDTH } from '../constants';
import type {
  TextInputOTPSlotInternalProps,
  TextInputOTPSlotProps,
} from '../types';
import { theme } from '../theme';
import { Caret } from './caret';

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
  const defaultTextColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });

  const shouldRenderCaret = isFocused && !code[index] && !caretHidden;

  return (
    <Pressable
      testID="text-input-otp-slot"
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
            { color: defaultTextColor },
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
    fontSize: theme.fontSize14,
    fontWeight: theme.fontWeightBold,
  },
});
