import {
  DEFAULT_DARK_COLOR,
  DEFAULT_LIGHT_COLOR,
  FOCUSED_SLOT_HEIGHT,
  SLOT_HEIGHT,
} from '../constants';
import type { UseSlotBorderStylesProps } from '../types';

export function useSlotBorderStyles({
  isFocused,
  isFirst,
  isLast,
}: UseSlotBorderStylesProps) {
  return {
    height: isFocused ? FOCUSED_SLOT_HEIGHT : SLOT_HEIGHT,
    borderColor: isFocused ? DEFAULT_DARK_COLOR : DEFAULT_LIGHT_COLOR,
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
