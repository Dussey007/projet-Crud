import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <>
      {/* --- Header --- */}

      <header className="bg-white shadow-md p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">Pokedex liste</h1>
          <div className='text-blue-400'>
            <nav className="flex gap-6">
              <Link to="/">All Pokedex</Link>
              <Link to="/PokedexPage">My Favorite</Link>
              <Link to="">Items</Link>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}


export default Navbar;