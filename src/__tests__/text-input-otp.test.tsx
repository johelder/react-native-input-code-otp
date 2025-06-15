import { fireEvent, render as TLRender } from '@testing-library/react-native';
import { TextInputOTP, TextInputOTPSlot } from '../components';
import type { TextInputOTPProps } from '../types';

function render({ maxLength = 6, ...rest }: Partial<TextInputOTPProps>) {
  return TLRender(
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
    const view = render({ onFilled: mockedOnFilled });
    fireEvent.changeText(view.getByTestId('hidden-text-input'), CODE);
    expect(mockedOnFilled).toHaveBeenCalledWith(CODE);
  });

  it('should not render the animated caret when the caretHidden prop is true', () => {
    const view = render({ caretHidden: true });
    expect(view.queryByTestId('caret')).toBeNull();
  });

  it('should render the slots only up to the number defined by the maxLength prop', async () => {
    const MAX_LENGTH = 6;
    const view = render({ maxLength: MAX_LENGTH, caretHidden: true });
    const slots = view.getAllByTestId('text-input-otp-slot');
    expect(slots).toHaveLength(MAX_LENGTH);
  });
});
