import { api } from "@/services/api";
import { ImageSlider } from "@/components/ImageSlider";

interface IPokePage {
  params: { id: string };
}

export default async function PokePage({ params }: IPokePage) {
  const pokemon: IPokemonDetail = (await api.get(`pokemon/${params.id}`)).data;

  return (
    <main className="m-0 m-auto w-5/6 pb-10">
      <section className="flex">
        <ImageSlider pokemon={pokemon} />
        <section className="flex flex-col justify-between">
          <h1>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h1>
          <div className="flex justify-between h-max flex-col pt-5">
            {pokemon &&
              pokemon.stats.map((stat, index) => (
                <p key={index}>
                  {stat.stat.name}:{" "}
                  <span className="text-red-200">{stat.base_stat}</span>
                </p>
              ))}
          </div>
        </section>
      </section>
    </main>
  );
}
