import { StyleSheet, View } from 'react-native';
import {
  TextInputOTP,
  TextInputOTPSlot,
  TextInputOTPGroup,
  TextInputOTPSeparator,
} from 'react-native-input-code-otp';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInputOTP maxLength={6} onFilled={(code) => console.log(code)}>
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
