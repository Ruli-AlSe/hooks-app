import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {
  const { counter, decrement, increment } = useCounter(1);
  const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

  return (
    <>
      <h1>Pokemon information</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={counter}
          name={String(data?.name)}
          sprites={[
            data?.sprites.front_default ?? '',
            data?.sprites.back_default ?? '',
            data?.sprites.front_shiny ?? '',
            data?.sprites.back_shiny ?? '',
          ]}
        />
      )}

      <button className="btn btn-primary mt-2" onClick={() => (counter > 1 ? decrement() : null)}>
        Previous
      </button>
      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Next
      </button>
    </>
  );
};
