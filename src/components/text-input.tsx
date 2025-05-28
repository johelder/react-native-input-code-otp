import { forwardRef, useImperativeHandle } from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { useTextInputOTP } from '../hooks/use-text-input-otp';
import type { TextInputOTPProps, TextInputOTPRef } from '../types';

export const TextInput = forwardRef<
  TextInputOTPRef,
  Omit<TextInputOTPProps, 'children'>
>(({ autoFocus = true, ...rest }, ref) => {
  const { inputRef, handleChangeText, setValue, focus, blur, clear } =
    useTextInputOTP();

  useImperativeHandle(ref, () => ({
    setValue,
    focus,
    blur,
    clear,
  }));

  return (
    <RNTextInput
      testID="hidden-text-input"
      ref={inputRef}
      keyboardType="number-pad"
      autoFocus={autoFocus}
      style={styles.input}
      {...rest}
      onChangeText={handleChangeText}
    />
  );
});

const styles = StyleSheet.create({
  input: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0,
  },
});
