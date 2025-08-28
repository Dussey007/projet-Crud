import React, { useEffect, useState } from "react";
import axios from "axios";



export const BASE_URL = "https://pokeapi.co/api/v2";




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