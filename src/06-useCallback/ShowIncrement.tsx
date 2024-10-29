import { memo } from 'react';

interface Props {
  increment: (value?: number) => void;
}

export const ShowIncrement = memo(({ increment }: Props) => {
  console.log('I was re-rendered...');

  return (
    <button className="btn btn-primary" onClick={() => increment(3)}>
      Increment
    </button>
  );
});
