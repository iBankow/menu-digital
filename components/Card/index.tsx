import { IPizza } from "../../@types";
import { Price } from "./Price";

interface CardProps {
  pizza: IPizza;
  index?: number;
}

const Card = ({ pizza, index }: CardProps) => {
  const ingredientsLength = pizza.ingredients.length;

  const { price } = pizza;

  const ingredients = pizza.ingredients.map((ingredient) => {
    return ingredient.name;
  });

  return (
    <div
      className={
        "flex flex-row bg-neutral-800 h-24 justify-between p-2 rounded-lg drop-shadow-md"
      }
    >
      <div className={"flex flex-col justify-between mr-4 truncate"}>
        <h2 className={"font-bold text-4xl"}>
          {index ? `${index}-` : null}
          {pizza.name}
        </h2>
        <p className={"line-clamp-2"}>{ingredients.toString()}</p>
      </div>
      <Price price={price} />
    </div>
  );
};

export { Card };
