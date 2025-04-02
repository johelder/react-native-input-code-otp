import { theme } from '../theme/theme';
import { useThemeColor } from '../theme/use-theme-color';
import type { UseSlotBorderStylesProps } from '../types/text-input-otp-slot';

export function useSlotBorderStyles({
  isFocused,
  isFirst,
  isLast,
}: UseSlotBorderStylesProps) {
  const blurredBorderColor = useThemeColor({
    light: theme.colorLightGrey,
    dark: theme.colorDarkGrey,
  });
  const focusedBorderColor = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });

  return {
    height: isFocused ? 54 : 50,
    borderColor: isFocused ? focusedBorderColor : blurredBorderColor,
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
