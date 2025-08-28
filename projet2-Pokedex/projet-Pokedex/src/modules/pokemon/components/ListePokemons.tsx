import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Pokemon } from "@/types/Pokemon";

export const BASE_URL = "https://pokeapi.co/api/v2";

const ListePokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPokemonId, setCurrentPokemonId] = useState<string>("");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>(undefined);
  const [page, setPage] = useState(1); // page actuelle
  const limit = 20; // combien par page

  useEffect(() => {
    const offset = (page - 1) * limit;

    axios
      .get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.error(err));
  }, [page]); // on recharge quand "page" change


  useEffect(() => {
    const found = pokemons.find((p) => p.name === currentPokemonId);
    setCurrentPokemon(found);
  }, [currentPokemonId, pokemons]);

  // Fonction pour extraire l’ID
  const getPokemonId = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 2];
  };

  return (
    <div className="p-6">
      {/* Liste des pokémons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {pokemons.map((pokemon, index) => {
          const id = getPokemonId(pokemon.url);
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={index}
              onClick={() => setCurrentPokemonId(pokemon.name)}
              className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              <img src={imageUrl} alt={pokemon.name} className="w-20 h-20 mx-auto" />
              <p className="capitalize font-semibold text-center">
                {pokemon.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Boutons pagination */}
      <div className="flex justify-center gap-4 mt-6">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded-lg disabled:opacity-50"
        >
          ⬅️ Précédent
        </button>

        <span className="font-semibold">Page {page}</span>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          Suivant ➡️
        </button>
      </div>

      {/** Détails du Pokémon sélectionné */}
      <div className="w-80 h-100 m-20 bg-amber-800 rounded-2xl ">
        {currentPokemon && (
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">
              {currentPokemon.name}
            </h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(currentPokemon.url)}.png`}
              alt={currentPokemon.name}
              className="w-32 h-32 mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ListePokemons;
