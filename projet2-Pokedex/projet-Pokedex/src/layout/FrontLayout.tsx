import HomePage from "@/pages/HomePage";
import Navbar from "@/modules/pokedex/components/Navbar";


export default function FrontLayout() {
  return (
    <div className=" flex flex-col bg-gray-100">
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