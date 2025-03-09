type MoneyEarnedProps = {
  price: number;
  sales: number;
};

const MoneyEarned = ({ price, sales }: MoneyEarnedProps) => {
  return ((price * sales) / 100).toFixed(2);
};

export default MoneyEarned;
