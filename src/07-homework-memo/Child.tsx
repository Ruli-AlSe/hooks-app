import { memo } from 'react';

interface Props {
  number: number;
  increment: (value: number) => void;
}

export const Child = memo(({ number, increment }: Props) => {
  console.log('I was re-rendered');

  return (
    <button className="btn btn-primary mr-3" onClick={() => increment(number)}>
      {number}
    </button>
  );
});
