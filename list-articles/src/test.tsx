import { useState, useEffect } from "react";
import Button from "./components/button";

// Définition du type Article
type Article = {
  id: number;
  nom: string;
  prix: number;
  stock: number;
};

const datas: Article[] = [
  { id: 1, nom: "Chaussures", prix: 10000, stock: 3 },
  { id: 2, nom: "T-shirt", prix: 2500, stock: 7 },
  { id: 3, nom: "Casquette", prix: 1000, stock: 5 },
  { id: 4, nom: "Sac", prix: 5000, stock: 10 },
  { id: 5, nom: "Pantalon", prix: 8000, stock: 4 },
];

export default function TestP() {
  const [articles, setArticles] = useState<Article[]>(() => {
    const stored = localStorage.getItem("articles");
    return stored ? (JSON.parse(stored) as Article[]) : datas;
  });

  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selected, setSelected] = useState<Article | null>(null);
  const [qty, setQty] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);

  // 🔹 Nouveaux états pour pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  useEffect(() => {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles]);

  // Suppression d'un article
  const deleteArticle = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  // Visualiser un article
  const seeArticle = (id: number) => {
    const article = articles.find((a) => a.id === id);
    setSelectedArticle(article || null);
  };

  // Acheter un article
  const buyArticle = () => {
    if (!selected) return;
    if (qty > selected.stock) {
      alert("Stock insuffisant !");
      return;
    }
    setArticles(
      articles.map((a) =>
        a.id === selected.id ? { ...a, stock: a.stock - qty } : a
      )
    );
    setShowModal(false);
    setQty(1);
  };

  // Modification du nom d'article
  const editArticle = (id: number, newNom: string) => {
    setArticles(articles.map((a) => (a.id === id ? { ...a, nom: newNom } : a)));
  };

  // 🔹 Pagination : calcul des articles visibles
  const totalPages = Math.ceil(articles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleArticles = articles.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="p-5">
      <h1 className="pb-8 text-xl font-bold"> Liste des Articles</h1>
      <ul className="space-y-3">
        {visibleArticles.map((article) => (
          <li
            key={article.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <div>
              {article.nom} - {article.prix}Fr (Stock: {article.stock})
            </div>
            <div className="space-x-2">
              <Button
                onClick={() =>
                  editArticle(
                    article.id,
                    prompt("Nouveau nom :") || article.nom
                  )
                }
                variant="primary"
              >
                Modifier
              </Button>

              <Button
                onClick={() => deleteArticle(article.id)}
                variant="danger"
              >
                Supprimer
              </Button>

              <button
                onClick={() => seeArticle(article.id)}
                className="px-3 py-1 bg-green-500 text-white rounded-lg"
              >
                Voir
              </button>

              <Button
                onClick={() => {
                  setSelected(article);
                  setShowModal(true);
                }}
                disabled={article.stock < 1}
                variant="success"
              >
                Acheter
              </Button>
            </div>
          </li>
        ))}
      </ul>

      {/* 🔹 Pagination Controls */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          ⬅ Précédent
        </button>
        <span>
          Page {currentPage} / {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Suivant ➡
        </button>
      </div>

      {/* affichage Popup */}
      {selectedArticle && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white text-blue-950 rounded-lg p-6 w-80 relative">
            <h2 className="font-bold">Libellé : {selectedArticle.nom}</h2>
            <h2 className="font-bold">Prix :{selectedArticle.prix}</h2>
            <h2 className="font-bold">
              Nombre en stock :{selectedArticle.stock}
            </h2>
            <button
              onClick={() => setSelectedArticle(null)}
              className="mt-4 px-3 py-1 bg-red-500 text-white rounded-lg absolute top-2 right-2"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Modal achat D'ARTICLE */}
      {showModal && selected && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-lg font-bold mb-2">Acheter : {selected.nom}</h2>
            <p>Stock disponible : {selected.stock}</p>
            <input
              type="number"
              value={qty}
              min={1}
              max={selected.stock}
              onChange={(e) => setQty(Number(e.target.value))}
              className="border p-2 w-full mt-2 text-black"
            />
            <div className="flex justify-end mt-4 space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-400 px-3 py-1 rounded"
              >
                Annuler
              </button>
              <button
                onClick={buyArticle}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



// import {useState} from 'react'


// type Article = {
//     id: number;
//     nom: string;
//     prix: number;
//     stock: number;
//   };


//   export default function TestP() {
//     // Liste d’articles initiale
//     const [articles, setArticles] = useState<Article[]>([
//       { id: 1, nom: "Chaussures", prix: 15000, stock: 10 },
//       { id: 2, nom: "T-shirt", prix: 5000, stock: 15 },
//       { id: 3, nom: "Casquette", prix: 2500, stock: 8 },
//     ]);
  
//     const [selected, setSelected] = useState<Article | null>(null);
//     const [qty, setQty] = useState<number>(1);
//     const [showModal, setShowModal] = useState(false);
  
//     // Suppression d'un article
//     const deleteArticle = (id: number) => {
//       setArticles(articles.filter((a) => a.id !== id));
//     };
  
//     // Modification du nom d'article
//     const editArticle = (id: number, newNom: string) => {
//       setArticles(
//         articles.map((a) => (a.id === id ? { ...a, nom: newNom } : a))
//       );
//     };
  
//     //voir un article
//     const seeArticle = () => {
        
//     }


//     // Acheter un article
//     const buyArticle = () => {
//       if (!selected) return;
//       if (qty > selected.stock) {
//         alert("Stock insuffisant !");
//         return;
//       }
//       setArticles(
//         articles.map((a) =>
//           a.id === selected.id ? { ...a, stock: a.stock - qty } : a
//         )
//       );
//       setShowModal(false);
//       setQty(1);
//     };
//     return (
//         <div className="p-6">
//         <h1 className="text-xl font-bold mb-4">🛒 Liste des Articles</h1>
//         <ul className="space-y-2">
//           {articles.map((article) => (
//             <li
//               key={article.id}
//               className="border p-3 rounded flex justify-between items-center"
//             >
//               <div>
//                 <span className="font-semibold">{article.nom}</span> -{article.prix}FrCFA  
//                 <span className="ml-2 text-gray-600">(Stock: {article.stock})</span>
//               </div>
//               <div className="space-x-2">


//                 <button
//                   onClick={() =>
//                     editArticle(article.id, prompt("Nouveau nom :") || article.nom)
//                   }
//                   className="bg-yellow-400 px-2 py-1 rounded"
//                 >
//                   ✏ Modifier
//                 </button>

                  
//                 <button
//                   onClick={() => deleteArticle(article.id)}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   🗑 Supprimer
//                 </button>

//                 <button
//                   onClick={() => {
//                     setSelected(article);
//                     setShowModal(true);
//                   }}
//                   className="bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   Voir
//                 </button>

//                 <button
//                   onClick={() => {
//                     setSelected(article);
//                     setShowModal(true);
//                   }}
//                   className="bg-green-500 text-white px-2 py-1 rounded"
//                 >
//                   Acheter
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
  
//         {/* Modal achat D'ARTICLE */}
//         {showModal && selected && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//             <div className="bg-white p-6 rounded shadow-lg w-80">
//               <h2 className="text-lg font-bold mb-2">
//                 Acheter : {selected.nom}
//               </h2>
//               <p>Stock disponible : {selected.stock}</p>
//               <input
//                 type="number"
//                 value={qty}
//                 min={1}
//                 max={selected.stock}
//                 onChange={(e) => setQty(Number(e.target.value))}
//                 className="border p-2 w-full mt-2 text-black"
//               />
//               <div className="flex justify-end mt-4 space-x-2">
//                 <button
//                   onClick={() => setShowModal(false)}
//                   className="bg-gray-400 px-3 py-1 rounded"
//                 >
//                   Annuler
//                 </button>
//                 <button
//                   onClick={buyArticle}
//                   className="bg-blue-500 text-white px-3 py-1 rounded"
//                 >
//                   Confirmer
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     )
// }

