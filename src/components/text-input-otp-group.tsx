import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
} from 'react';
import { View, StyleSheet } from 'react-native';
import type {
  TextInputOTPGroupProps,
  TextInputOTPSlotInternalProps,
} from '../types';

export function TextInputOTPGroup({
  groupStyles,
  children,
}: TextInputOTPGroupProps) {
  const slots = Children.toArray(children).filter(
    (child): child is ReactElement<TextInputOTPSlotInternalProps> =>
      isValidElement(child)
  );

  return (
    <View style={StyleSheet.flatten([styles.inputGroup, groupStyles])}>
      {slots.map((child, index) =>
        cloneElement(child, {
          isFirst: index === 0,
          isLast: index === slots.length - 1,
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
