import type { UseSlotBorderStylesProps } from '../types/text-input-otp-slot';

export function useSlotBorderStyles({
  isFocused,
  isFirst,
  isLast,
}: UseSlotBorderStylesProps) {
  return {
    height: isFocused ? 54 : 50,
    borderColor: isFocused ? '#030712' : '#E4E7EC',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: isFocused || isFirst ? 2 : 1,
    borderRightWidth: isFocused || isLast ? 2 : 1,
    borderTopLeftRadius: isFirst ? 8 : 0,
    borderTopRightRadius: isLast ? 8 : 0,
    borderBottomLeftRadius: isFirst ? 8 : 0,
    borderBottomRightRadius: isLast ? 8 : 0,
  };
}
