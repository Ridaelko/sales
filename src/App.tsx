import "./App.css";

import { useState } from "react";
import BalancesCalcul from "./assets/components/BalancesCalcul";
import MoneyEarned from "./assets/components/MoneyEarned";

const App = () => {
  const [price, setPrice] = useState<number>(0);
  const [sales, setSales] = useState<number>(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div className="bg-[#DEFBDC] h-screen flex justify-center items-center ">
        <div>
          <h1>Calcul de soldes</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="price">Entrez le prix de l'article</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => {
                setPrice(parseFloat(e.target.value));
                setSubmitted(false);
              }}
            />
            €<label htmlFor="sales">Entrez la valeur de la réduction</label>
            <input
              type="number"
              id="sales"
              value={sales}
              onChange={(e) => {
                setSales(parseFloat(e.target.value));
              }}
            />
            %<button type="submit">Calculer</button>
          </form>

          {submitted && (
            <p>
              Votre prix après réduction est{" "}
              <BalancesCalcul price={price} sales={sales} />
              €, vous avez économisé <MoneyEarned price={price} sales={sales} />
              €
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
