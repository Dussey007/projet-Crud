import HomePage from "@/pages/HomePage";

export default function FrontLayout() {
  return (
    <div className=" flex flex-col bg-gray-100">
      {/* --- Header --- */}
      <header className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Pokedex liste</h1>
          <nav className="flex gap-6">
            <a href="#Pokemon" className="text-gray-700 hover:text-blue-600">Pokemon</a>
            <a href="#Pokedex" className="text-gray-700 hover:text-blue-600">Pokedex</a>
            <a href="#Items" className="text-gray-700 hover:text-blue-600">Items</a>
          </nav>
        </div>
      </header>

      {/* --- Main --- */}
      <main className="flex-1 flex items-center justify-center text-center">
        <div>
          <HomePage />
        </div>
      </main>

      {/* --- Footer --- */}
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-gray-600">
          Pokemon List
        </p>
      </footer>
    </div>
  );
}