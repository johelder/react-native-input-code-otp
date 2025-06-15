import { act, fireEvent, render } from '@testing-library/react-native';
import { TextInputOTP, TextInputOTPSlot } from '../components';
import type { TextInputOTPProps, TextInputOTPRef } from '../types';
import { createRef } from 'react';

function renderTextInputOTP({
  maxLength = 6,
  ...rest
}: Partial<TextInputOTPProps>) {
  return render(
    <TextInputOTP maxLength={maxLength} {...rest}>
      <TextInputOTPSlot index={0} />
      <TextInputOTPSlot index={1} />
      <TextInputOTPSlot index={2} />
      <TextInputOTPSlot index={3} />
      <TextInputOTPSlot index={4} />
      <TextInputOTPSlot index={5} />
    </TextInputOTP>
  );
}

describe('TextInputOTP Component', () => {
  beforeAll(() => {
    jest.resetAllMocks();
  });

  it('should call onFilled with the complete code when all digits are filled', () => {
    const CODE = '123456';
    const mockedOnFilled = jest.fn();
    const view = renderTextInputOTP({ onFilled: mockedOnFilled });
    fireEvent.changeText(view.getByTestId('hidden-text-input'), CODE);
    expect(mockedOnFilled).toHaveBeenCalledWith(CODE);
  });

  it('should not render the animated caret when the caretHidden prop is true', () => {
    const view = renderTextInputOTP({ caretHidden: true });
    expect(view.queryByTestId('caret')).toBeNull();
  });

  it('should render the slots only up to the number defined by the maxLength prop', () => {
    const MAX_LENGTH = 6;
    const view = renderTextInputOTP({
      maxLength: MAX_LENGTH,
      caretHidden: true,
    });
    const slots = view.getAllByTestId('text-input-otp-slot');
    expect(slots).toHaveLength(MAX_LENGTH);
  });

  it('should call onFilled with the complete code when setValue is called programmatically', () => {
    const CODE = '123';
    const mockedOnFilled = jest.fn();
    const ref = createRef<TextInputOTPRef>();
    render(
      <TextInputOTP ref={ref} maxLength={3} onFilled={mockedOnFilled}>
        <TextInputOTPSlot index={0} />
        <TextInputOTPSlot index={1} />
        <TextInputOTPSlot index={2} />
      </TextInputOTP>
    );
    act(() => ref.current?.setValue(CODE));
    expect(mockedOnFilled).toHaveBeenCalledWith(CODE);
  });

  it('should call clear the input text when clear function is called programmatically', () => {
    const CODE = '1';
    const ref = createRef<TextInputOTPRef>();
    const view = render(
      <TextInputOTP ref={ref} maxLength={3}>
        <TextInputOTPSlot index={0} />
        <TextInputOTPSlot index={1} />
        <TextInputOTPSlot index={2} />
      </TextInputOTP>
    );
    fireEvent.changeText(view.getByTestId('hidden-text-input'), CODE);
    act(() => ref.current?.clear());
    expect(view.queryByText(CODE)).toBeFalsy();
  });
});
