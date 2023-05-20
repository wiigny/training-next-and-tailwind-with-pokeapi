"use client";

import { IPokemon } from "@/app/page";
import Button from "../Button";
import { useEffect, useState } from "react";
import { api } from "@/services/api";
import Link from "next/link";
import Image from "next/image";

export default function ListPoke({ pokemon }: { pokemon: IPokemon }) {
  const [page, setPage] = useState(0);
  const [pokemons, setPokemons] = useState(pokemon);

  useEffect(() => {
    async function changePoke() {
      const resp: IPokemon = (await api.get(`pokemon/?offset=${page}&limit=20`))
        .data;

      setPokemons(resp);
    }
    changePoke();
  }, [page]);

  return (
    <>
      <ul className="grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pokemons &&
          pokemons.results.map((poke) => {
            const id = poke.url.slice(34, -1);

            return (
              <Link key={poke.name} href={`/${id}`}>
                <li className="overflow-hidden rounded-md cursor-pointer hover:scale-105 hover:shadow-gray-400 hover:shadow-lg ease-in-out duration-200 relative">
                  <figure className="flex items-center justify-center">
                    <Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                      alt={poke.name}
                      height={100}
                      width={100}
                    />
                  </figure>
                  <p className="bg-red-900 text-white pl-2 py-0.5">
                    {poke.name}
                  </p>
                </li>
              </Link>
            );
          })}
      </ul>
      <div className="flex justify-center gap-5 m-auto items-center pt-10">
        <Button
          type="button"
          click={() => page > 0 && setPage(page - 20)}
          classes="shadow-lg shadow-red-900 rounded-lg bg-red-900 text-white px-4 py-1 hover:scale-105 duration-200"
        >
          Prev
        </Button>

        <span>{page / 20 + 1}</span>

        <Button
          type="button"
          click={() => pokemon.next && setPage(page + 20)}
          classes="shadow-lg shadow-red-900 rounded-lg bg-red-900 text-white px-4 py-1 hover:scale-105 duration-200"
        >
          Next
        </Button>
      </div>
    </>
  );
}
