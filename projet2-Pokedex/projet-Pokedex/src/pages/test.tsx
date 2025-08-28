import React, { useEffect, useState } from "react";
import axios from "axios";

export const BASE_URL = "https://pokeapi.co/api/v2";

type Pokemon = {
  name: string;
  url: string;
};

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState<Pokemon[]>([]);

  // Charger les pokemons avec axios + localStorage
  useEffect(() => {
    const savedPokemons = localStorage.getItem("pokemons");

    if (savedPokemons) {
      // Si déjà sauvegardés → on récupère du localStorage
      setPokemons(JSON.parse(savedPokemons));
    } else {
      // Sinon → on va chercher avec Axios
      axios
        .get(`${BASE_URL}/pokemon?limit=20`)
        .then((res) => {
          setPokemons(res.data.results);
          localStorage.setItem("pokemons", JSON.stringify(res.data.results));
        })
        .catch((err) => console.error(err));
    }
  }, []);

  // Filtrage quand on tape dans la barre de recherche
  useEffect(() => {
    const results = pokemons.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(results);
  }, [search, pokemons]);

  // Fonction utilitaire : extraire l’ID depuis l’URL du Pokémon
  const getPokemonId = (url: string) => {
    const parts = url.split("/"); // ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "1", ""]
    return parts[parts.length - 2]; // avant-dernier = ID
  };

  return (
    <div className="p-6">
      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un Pokémon..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 mb-6 w-80 shadow"
      />

      {/* Liste des Pokémons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {filtered.map((pokemon, index) => {
          const id = getPokemonId(pokemon.url);
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

          return (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              <img
                src={imageUrl}
                alt={pokemon.name}
                className="w-20 h-20 mx-auto"
              />

              <p className="capitalize font-semibold text-center">
                Nom : {pokemon.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonList;
