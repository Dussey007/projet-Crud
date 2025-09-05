import React, { useEffect, useState } from "react";


function PokedexPage() {
  const [pokedex, setPokedex] = useState<any[]>([]);

  //STOCK ALL POKEDEX OF LOCALSTORAGE IN CONSTANT SAVED
  useEffect(() => {
    const saved = localStorage.getItem("pokedex");
    if (saved) {
      try {
        setPokedex(JSON.parse(saved));
      } catch (e) {
        console.error("Erreur rencontrer :", e);
        setPokedex([]);
      }
    }
  }, []);

  //DELETE ONE POKEMON
  const removePokemon = (name: string) => {
    const updated = pokedex.filter((item) => item.name !== name);
    setPokedex(updated);
    localStorage.setItem("pokedex", JSON.stringify(updated));
  };
  const removeAllPokemon = () => {
    localStorage.clear();
  };


  return (
    <>
      <div className="items-center  bg-gray-100 pb-15">
        <p className="text-2xl text-center text-orange-300 font-bold shadow-blue-950 pb-20 pt-5">Liste des Pokemons Favoris</p>

        <div className="grid grid-cols-2 sm:grid-cols-4 text-black gap-4">
          {pokedex.map(poke => (

            <div
              key={poke.id}
              className="bg-white p-4 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              {/* Image du Pokémon (si tu stockes l'URL dans pokedex) */}
              <img src={poke.url} alt={poke?.name} className="w-20 h-20 mx-auto" />

              {/* Nom du Pokémon */}
              <p className="capitalize font-semibold text-center">
                {poke.name}
              </p>
              <button onClick={() => removePokemon(poke.name)} className="bg-red-500 hover:bg-red-700 text-white font-bold ml-10 mt-2 py-1 px-6 rounded-full ">
                Supprimer
              </button>
            </div>
          ))}

        </div>
        <button onClick={() => removeAllPokemon()} className="bg-red-500 hover:bg-red-700 text-white font-bold ml-110 mt-5 py-1 px-6 rounded-full ">Tout supprimer</button>
      </div>
    </>
  );
}

export default PokedexPage;