type BalancesCalculProps = {
  price: number;
  sales: number;
};

const BalancesCalcul = ({ price, sales }: BalancesCalculProps) => {
  return (price - (price * sales) / 100).toFixed(2);
};

export default BalancesCalcul;
