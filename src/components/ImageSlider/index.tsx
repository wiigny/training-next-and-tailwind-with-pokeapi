"use client";

import Image from "next/image";
import { useState } from "react";
import { ListImage } from "../ListImage";

export function ImageSlider({ pokemon }: { pokemon: IPokemonDetail }) {
  const [pokeUrl, setPokeUrl] = useState<string | null>(
    pokemon.sprites.front_default
  );

  function changeImage(url: string) {
    setPokeUrl(url);
  }

  return (
    <div className="flex flex-row-reverse">
      <figure className="m-auto">
        {pokeUrl ? (
          <Image src={pokeUrl} alt={pokemon.name} width={200} height={200} />
        ) : (
          <span className="text-bold">Empty</span>
        )}
      </figure>
      <ListImage
        sprites={pokemon.sprites}
        imageActual={pokeUrl || ""}
        click={changeImage}
      />
    </div>
  );
}
