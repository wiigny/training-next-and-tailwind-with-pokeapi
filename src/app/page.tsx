/* eslint-disable @next/next/no-img-element */
import ListPoke from "@/components/ListPoke";
import { api } from "../services/api";

export interface IPokemon {
  count: number;
  next: string | null;
  previous: string | null;
  results: [{ name: string; url: string }];
}

export default async function Home() {
  const pokemon: IPokemon = (await api.get(`pokemon/?offset=0&limit=20`)).data;

  return (
    <main className="m-0 m-auto w-5/6 pb-10">
      <ListPoke pokemon={pokemon} />
    </main>
  );
}
