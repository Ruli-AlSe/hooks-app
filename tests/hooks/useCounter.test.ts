import { act, renderHook } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Testing useCounter', () => {
  test('should return default values', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test('should return the value passed by argument', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => {
      increment();
      increment(5);
    });

    expect(result.current.counter).toBe(106);
  });

  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => {
      decrement();
      decrement(5);
    });

    expect(result.current.counter).toBe(94);
  });

  test('should reset the counter to initial value', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement, reset } = result.current;

    act(() => {
      decrement(50);
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
