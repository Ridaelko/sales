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
        <h1 className="uppercase text-3xl font-extrabold">
          Calculez le prix soldé et combien vous économisez
        </h1>
        <div className="bg-[#95C18C] border-4 rounded-4xl w-[745px] h-[485px] mt-20 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-[130px] py-[45px]"
          >
            <label
              htmlFor="price"
              className="uppercase text-xl font-medium mb-4"
            >
              Entrez un prix
            </label>
            <div className="flex">
              <input
                className="bg-[#DEFBDC] border-2 rounded-4xl h-10 mb-10 pl-3 w-full"
                type="number"
                id="price"
                value={price}
                onChange={(e) => {
                  setPrice(parseFloat(e.target.value));
                  setSubmitted(false);
                }}
              />
              <p className="text-xl">€</p>
            </div>
            <label
              htmlFor="sales"
              className="uppercase text-xl font-medium mb-4"
            >
              Entrez la valeur de la réduction
            </label>
            <div className="flex">
              <input
                className="bg-[#DEFBDC] border-2 rounded-4xl h-10 mb-10 pl-3 w-full"
                type="number"
                id="sales"
                value={sales}
                onChange={(e) => {
                  setSales(parseFloat(e.target.value));
                }}
              />
              <p className="text-xl">%</p>
            </div>
            <button
              type="submit"
              className="uppercase border-2 rounded-4xl h-10 bg-[#DEFBDC] font-bold text-lg w-1/2  justify-items-center"
            >
              Calculer
            </button>
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
