import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';

const heavyStuff = (iterationNumber: number = 100) => {
  for (let index = 0; index < iterationNumber; index++) {
    console.log('iterating...');
  }

  return `${iterationNumber} iterations done`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(4000);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>
        counter: <small>{counter}</small>
      </h1>
      <hr />

      <h4>{memorizeValue}</h4>

      <button className="btn btn-primary" onClick={() => increment()}>
        + 1
      </button>

      <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
