interface PokemonInfo {
  id: number;
  name: string;
  sprites?: string[];
}

export const PokemonCard = ({ id, name, sprites = [] }: PokemonInfo) => {
  return (
    <section style={{ height: 400 }}>
      <h2 className="text-capitalize">
        #{id} - {name}
      </h2>

      <div>
        {sprites.map((sprite) => (
          <img style={{ width: '250px' }} key={sprite} src={sprite} alt={`${name} sprite ${id}`} />
        ))}
      </div>
    </section>
  );
};
