import ListePokemons from "@pokemon/components/ListePokemons";

export default function HomePage() {
  return (
    <div>
        <div>
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
            Page de liste des pokemons
          </h2>
          <div className="text-lg text-gray-600 mb-6"></div>
            <ListePokemons />
          </div>
    </div>
  );
}