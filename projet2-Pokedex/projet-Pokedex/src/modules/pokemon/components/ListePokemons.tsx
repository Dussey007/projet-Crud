import React, { useEffect, useState } from "react";
import axios from "axios";
import type { Pokemon } from "@/types/Pokemon";


export const BASE_URL = "https://pokeapi.co/api/v2";

const ListePokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [currentPokemonId, setCurrentPokemonId] = useState<string>("");
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>(undefined);
  const [page, setPage] = useState(1); // la page actuelle
  const limit = 20; // combien par pg
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Pokemon[]>([]);



  // Fonction pour extraire l’ID
  const getPokemonId = (url: string) => {
    const parts = url?.split("/");
    return parts[parts?.length - 2];
  };


  const favoris = (id: number | undefined, name: string | undefined) => {
    const selectPokemon = pokemons.find((p) => p.name === name);
    const selectUrlPokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    console.log(selectPokemon, id, name);

    const pokemon1 = {
      name: selectPokemon.name,
      url: selectUrlPokemon
    }
    let pokedex = JSON.parse(localStorage.getItem("pokedex") || "[]");

    // Retirer l’item s’il existe déjà (comparaison par `url` ou `name`)
    pokedex = pokedex.filter((item: any) => item.name !== selectPokemon.name);

    // Ajouter à la suite
    pokedex.push(pokemon1);

    // Sauvegarde dans le localStorage
    localStorage.setItem("pokedex", JSON.stringify(pokedex));
    console.log(pokemon1);
  }


  const getCurrentPokemon = async (url: string) => {
    try {
      const res = await axios.get(url);
      setCurrentPokemon(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  //stock pokemon in localStorage pokemons
  useEffect(() => {
    localStorage.setItem("pokemons", JSON.stringify(pokemons));
  }, [pokemons]);

  useEffect(() => {
    const offset = (page - 1) * limit;
    axios
      .get(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => setPokemons(res.data.results))
      .catch((err) => console.error(err));
  }, [page]);

  //search in the table and verify if the name of pokemon match with the current pokemon
  useEffect(() => {
    const found: any = pokemons.find((p) => p.name === currentPokemonId);
    getCurrentPokemon(found?.url)
  }, [currentPokemonId, pokemons]);


  //Filtrage quand on tape dans la barre de recherche
  useEffect(() => {
    const results: any = pokemons.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, pokemons]);


  return (
    <div className="p-6">

      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 mb-6 w-80 shadow"
      />



      {/* Liste des pokémons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {filtered.map((pokemon: Pokemon, index) => {
          const id = getPokemonId(pokemon?.url);
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={index}
              onClick={() => setCurrentPokemonId(pokemon?.name)}
              className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              <img src={imageUrl} alt={pokemon?.name} className="w-20 h-20 mx-auto" />
              <p className="capitalize font-semibold text-center">
                {pokemon?.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Boutons pagination */}
      <div className="flex justify-center text-blue-700 gap-4 mt-6">
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
      {currentPokemon ?
        <div className="w-80 h-130 m-20 bg-amber-800 rounded-2xl">
          <div className="p-4">
            <h3 className="text-xl font-semibold text-white">
              {currentPokemon.name}
            </h3>
            {currentPokemon ?
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${currentPokemon.id}.png`}
                alt={currentPokemon.name}
                className="w-40 h-60 mx-auto"
              /> : <p className="text-white">Selectionnez une image a mettre en favoris</p>}

            <h3 className="text-yellow-300 text-2xl">Taille : {currentPokemon.height}</h3>
            <h3 className="text-yellow-300 text-2xl">Poids : {currentPokemon.weight}</h3>
            <h3 className="text-yellow-300 text-2xl">Ordre : {currentPokemon.order}</h3>
            <h3 className="text-yellow-300 text-2xl">Base Experiences : {currentPokemon.base_experience}</h3>
          </div>
          <div className="">
            <label >
              <div className="relative flex items-center cursor-pointer select-none">
                <input type="checkbox" onClick={() => favoris(currentPokemon.id, currentPokemon.name)} className="peer hidden " />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 ml-35 text-gray-400 transition-colors duration-300 peer-checked:text-red-500 peer-checked:fill-red-500"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.127-4.312 2.733-.715-1.606-2.377-2.733-4.312-2.733C5.099 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </label>
          </div>

        </div>
        : <p>TEST</p>}

    </div>
  );
};

export default ListePokemons;