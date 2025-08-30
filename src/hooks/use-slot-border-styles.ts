import type { StyleProp, ViewStyle } from 'react-native';
import { FOCUSED_SLOT_HEIGHT, SLOT_HEIGHT } from '../constants';
import { theme } from '../theme';
import type { UseSlotBorderStylesProps } from '../types';
import { useThemeColor } from './use-theme-color';

export function useSlotBorderStyles({
  isFocused,
  isFirst,
  isLast,
}: UseSlotBorderStylesProps): StyleProp<ViewStyle> {
  const darkBorder = useThemeColor({
    light: theme.colorBlack,
    dark: theme.colorWhite,
  });
  const lightBorder = useThemeColor({
    light: theme.colorLightGrey,
    dark: theme.colorDarkGrey,
  });

  return {
    height: isFocused ? FOCUSED_SLOT_HEIGHT : SLOT_HEIGHT,
    borderColor: isFocused ? darkBorder : lightBorder,
    borderTopWidth: theme.space2,
    borderBottomWidth: theme.space2,
    borderLeftWidth: isFocused || isFirst ? theme.space2 : theme.space1,
    borderRightWidth: isFocused || isLast ? theme.space2 : theme.space1,
    borderTopLeftRadius: isFirst ? theme.borderRadius8 : theme.borderRadius0,
    borderTopRightRadius: isLast ? theme.borderRadius8 : theme.borderRadius0,
    borderBottomLeftRadius: isFirst ? theme.borderRadius8 : theme.borderRadius0,
    borderBottomRightRadius: isLast ? theme.borderRadius8 : theme.borderRadius0,
  };
}
