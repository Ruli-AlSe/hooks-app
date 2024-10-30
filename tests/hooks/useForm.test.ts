import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

describe('Testing useForm', () => {
  const initialForm = {
    name: 'Raul Almanza',
    email: 'raul@almanza.com',
  };

  test('should return default values', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('should change the name of the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;
    const newValue = 'Roberto Carlos';

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newValue,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.formState.name).toBe(newValue);
  });

  test('should reset the form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;
    const newName = 'Roberto Carlos';
    const newEmail = 'roberto@carlos.com';

    act(() => {
      onInputChange({
        target: {
          name: 'name',
          value: newName,
        },
      } as React.ChangeEvent<HTMLInputElement>);

      onInputChange({
        target: {
          name: 'email',
          value: newEmail,
        },
      } as React.ChangeEvent<HTMLInputElement>);

      onResetForm();
    });

    expect(result.current.formState.name).toBe(initialForm.name);
    expect(result.current.formState.email).toBe(initialForm.email);
  });
});
