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
      <div className="bg-primary h-screen flex flex-col justify-center items-center">
        <h1 className="uppercase text-3xl font-extrabold font-mono">
          Calculez le prix soldé et combien vous économisez
        </h1>
        <div className="bg-secondary border-4 rounded-4xl w-[745px] h-[485px] mt-20 ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-[130px] py-[45px]"
          >
            <label
              htmlFor="price"
              className="uppercase text-xl font-medium mb-4 font-mono"
            >
              Entrez un prix
            </label>
            <div className="flex">
              <input
                className="bg-primary border-2 rounded-4xl h-10 mb-10 pl-3 w-full font-mono  focus:outline-3 focus:outline-offset-2 focus:outline-primary"
                type="number"
                id="price"
                placeholder="Entrez un prix"
                value={price === 0 ? "" : price}
                onChange={(e) => {
                  setPrice(parseFloat(e.target.value));
                  setSubmitted(false);
                }}
              />
              <p className="text-2xl text-primary font-mono ml-2 mt-1">€</p>
            </div>
            <label
              htmlFor="sales"
              className="uppercase text-xl font-medium mb-4 font-mono"
            >
              Entrez la valeur de la réduction
            </label>
            <div className="flex">
              <input
                className="bg-primary border-2 rounded-4xl h-10 mb-10 pl-3 w-full font-mono focus:outline-3 focus:outline-offset-2 focus:outline-primary"
                type="number"
                id="sales"
                placeholder="Entrez la rédution"
                value={sales === 0 ? "" : sales}
                onChange={(e) => {
                  setSales(parseFloat(e.target.value));
                  setSubmitted(false);
                }}
              />
              <p className="text-2xl text-primary font-mono ml-2 mt-1">%</p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="uppercase border-2 rounded-4xl h-10 bg-primary font-bold text-lg w-1/2 justify-center font-mono hover:bg-gray-600 hover:text-primary"
              >
                Calculer
              </button>
            </div>
          </form>

          {submitted && (
            <p className="text-primary font-mono text-xl text-center">
              Votre prix après réduction est de{" "}
              <BalancesCalcul price={price} sales={sales} />
              € <br /> Vous avez économisé{" "}
              <MoneyEarned price={price} sales={sales} />€
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
