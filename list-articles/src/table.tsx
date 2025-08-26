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
];

export default function TableList() {
  // Liste d’articles initiale (dans un state)
  const [articles, setArticles] = useState<Article[]>(() => {
    // Au moment de la création du state
    // Récupérer les données du localstorage
    const stored = localStorage.getItem("articles");
    // Si les données existent, on les prends par défaut, sinon on prend datas
    return stored ? (JSON.parse(stored) as Article[]) : datas;
  });
  
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selected, setSelected] = useState<Article | null>(null);
  const [qty, setQty] = useState<number>(1);
  const [showModal, setShowModal] = useState(false);

  useEffect(()=> {
    localStorage.setItem("articles", JSON.stringify(articles));
  }, [articles])

  // Suppression d'un article
  const deleteArticle = (id: number) => {
    setArticles(articles.filter((a) => a.id !== id));
  };

  //Visualiser un article
  const seeArticle = (id: number) => {
    const article = articles.find((a) => a.id === id);
    setSelectedArticle(article || null);
  };

  //Acheter un article
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

  return (
    <div className="p-5">
      <h1 className="pb-16">🛒 Liste des Articles</h1>
      <ul className="space-y-3">
        {articles.map((article) => (
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
              {
                <Button
                  onClick={() => {
                    setSelected(article);
                    setShowModal(true);
                  }}
                  disabled={article.stock < 3 ? true : false}
                  variant="success"
                >
                  Acheter
                </Button>
              }
            </div>
          </li>
        ))}
      </ul>

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
