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
      <div className="bg-[#DEFBDC] h-screen flex flex-col justify-center items-center">
        <h1 className="  uppercase text-xl font-extrabold">
          Calculez le prix soldé et combien vous économisez
        </h1>
        <div className="bg-[#95C18C] border-3 rounded-xl w-[745px] h-[485px] mt-20 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-[130px] py-[45px] "
          >
            <label htmlFor="price" className="uppercase text-lg">
              Entrez un prix
            </label>
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
