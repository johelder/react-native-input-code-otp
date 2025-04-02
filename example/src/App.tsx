import { useRef } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import {
  TextInputOTP,
  TextInputOTPSlot,
  TextInputOTPGroup,
  TextInputOTPSeparator,
  type TextInputOTPRef,
} from 'react-native-input-code-otp';

export default function App() {
  const colorSchema = useColorScheme();
  const inputRef = useRef<TextInputOTPRef>(null);
  const backgroundColor = colorSchema === 'light' ? 'white' : 'black';

  function handleSubmit(code: string) {
    console.log({ code });
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInputOTP ref={inputRef} maxLength={6} onFilled={handleSubmit}>
        <TextInputOTPGroup>
          <TextInputOTPSlot index={0} />
          <TextInputOTPSlot index={1} />
          <TextInputOTPSlot index={2} />
        </TextInputOTPGroup>
        <TextInputOTPSeparator />
        <TextInputOTPGroup>
          <TextInputOTPSlot index={3} />
          <TextInputOTPSlot index={4} />
          <TextInputOTPSlot index={5} />
        </TextInputOTPGroup>
      </TextInputOTP>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
