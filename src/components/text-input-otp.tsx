import { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInputOTPProvider } from '../hooks/use-text-input-otp';
import type { TextInputOTPProps, TextInputOTPRef } from '../types';
import { theme } from '../theme';
import { TextInput } from './text-input';

export const TextInputOTP = forwardRef<TextInputOTPRef, TextInputOTPProps>(
  ({ children, containerStyles, ...rest }, ref) => {
    return (
      <TextInputOTPProvider {...rest}>
        <View style={StyleSheet.flatten([styles.container, containerStyles])}>
          <TextInput ref={ref} {...rest} />
          {children}
        </View>
      </TextInputOTPProvider>
    );
  }
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.space10,
  },
});
