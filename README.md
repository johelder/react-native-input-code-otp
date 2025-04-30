# react-native-input-code-otp

react-native-input-code-otp is a high-performance and fully customizable OTP input component for React Native, inspired by @shadcn/ui.

![Presentation Video](./.github/assets/react-native-input-code-otp.gif)

## Installation

```sh
npm install react-native-input-code-otp
```

## Usage

```tsx
import {
  TextInputOTP,
  TextInputOTPSlot,
  TextInputOTPGroup,
  TextInputOTPSeparator,
} from 'react-native-input-code-otp';

export function MyComponent() {
  return (
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
  );
}
```

## Properties

| TextInputOTP | Type                              | Description                                                                                                                    |
| ------------ | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `maxLength`  | number - Required                 | The max number of digits to OTP code.                                                                                          |
| `onFilled`   | (code: string) => void - Optional | The callback function is executed when the OTP input has been entirely completed, and it receives the OTP code as a parameter. |
| `caretColor` | string - Optional                 | The color of the blinking caret shown in the focused input slot. Accepts any valid color string (e.g., hex, rgb, color names). |

---

| TextInputOTPGroup | Type                 | Description                   |
| ----------------- | -------------------- | ----------------------------- |
| `groupStyles`     | ViewStyle - Optional | Custom styles for the `View`. |

---

| TextInputOTPSlot        | Type                 | Description                                                                                                 |
| ----------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------- |
| `index`                 | number - Required    | The position of the slot within the OTP input sequence. Each slot must have a unique index starting from 0. |
| `slotStyles`            | ViewStyle - Optional | Custom styles for the `View`.                                                                               |
| `focusedSlotStyles`     | ViewStyle - Optional | Custom styles applied to the slot `View` when it is focused.                                                |
| `slotTextStyles`        | TextStyle - Optional | Custom styles for the `Text`.                                                                               |
| `focusedSlotTextStyles` | TextStyle - Optional | Custom styles applied to the slot `Text` when it is focused.                                                |

---

| TextInputOTPSeparator | Type                 | Description                   |
| --------------------- | -------------------- | ----------------------------- |
| `separatorStyles`     | ViewStyle - Optional | Custom styles for the `View`. |

## Methods

The `TextInputOTP` component exposes these functions with `ref`:

| Prop       | Type                    | Description                                                                |
| ---------- | ----------------------- | -------------------------------------------------------------------------- |
| `clear`    | () => void              | Resets the OTP input by clearing all entered values.                       |
| `focus`    | () => void              | Activates the OTP input field, allowing the user to type.                  |
| `blur`     | () => void              | Deactivates the OTP input field, removing focus.                           |
| `setValue` | (value: string) => void | Sets a custom value to the OTP input fields, overriding any current input. |

## Examples

<details>
<summary>Usage with react-hook-form</summary>

```tsx
import { Button, View } from 'react-native';
import {
  TextInputOTP,
  TextInputOTPSlot,
  TextInputOTPGroup,
  TextInputOTPSeparator,
} from 'react-native-input-code-otp';
import { Controller, useForm } from 'react-hook-form';

type FormValues = {
  code: string;
};

export function MyComponent() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      code: '',
    },
  });

  function onSubmit({ code }: FormValues) {
    console.log({ code });
  }

  return (
    <View>
      <Controller
        name="code"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInputOTP value={value} onChangeText={onChange} maxLength={6}>
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
        )}
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
```

</details>

<details>
<summary>Usage of ref to programmatically set OTP value</summary>

```tsx
import { useRef } from 'react';
import { Button, View } from 'react-native';
import {
  TextInputOTP,
  TextInputOTPSlot,
  TextInputOTPGroup,
  TextInputOTPSeparator,
  type TextInputOTPRef,
} from 'react-native-input-code-otp';

export function MyComponent() {
  const inputRef = useRef<TextInputOTPRef>(null);

  function onSomeAction() {
    inputRef.current?.setValue('123456');
  }

  return (
    <View>
      <TextInputOTP ref={inputRef} maxLength={6}>
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

      <Button title="Submit" onPress={onSomeAction} />
    </View>
  );
}
```

</details>

## Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

If you find a bug or have any feature requests, please open an issue :)

## License

This project is licensed under the MIT License.
