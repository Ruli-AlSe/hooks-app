import { memo } from 'react';

export const Small = memo(({ value }: { value: number }) => {
  console.log('I was re-rendered');

  return <small>{value}</small>;
});
