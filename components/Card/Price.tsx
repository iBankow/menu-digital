interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  const decimanal = price.toString().slice(0, 2);

  const float = price.toString().slice(3, 4).padEnd(2, "0");

  return (
    <div className={"flex justify-center items-center"}>
      <p className={"text-lg font-extrabold"}>R$</p>
      <p className={"text-4xl font-extrabold"}>{decimanal}</p>
      <p className={"text-xl font-extrabold"}>,</p>
      <p className={"text-xl font-extrabold"}>{float}</p>
    </div>
  );
};

export { Price };
