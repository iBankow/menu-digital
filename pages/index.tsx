import type { NextPage } from "next";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  const array = [
    {
      id: 1,
      name: "Pizza1",
      price: 45.5,
      ingredients: [
        { id: 1, name: "Igredient-1" },
        { id: 2, name: "Igredient-2" },
        { id: 3, name: "Igredient-2" },
        { id: 4, name: "Igredient-2" },
        { id: 5, name: "Igredient-2" },
        { id: 6, name: "Igredient-2" },
        { id: 7, name: "Igredient-2" },
        { id: 8, name: "Igredient-2" },
        { id: 9, name: "Igredient-2" },
        { id: 10, name: "Igredient-2" },
        { id: 11, name: "Igredient-2" },
        { id: 12, name: "Igredient-2" },
      ],
    },
    {
      id: 2,
      name: "Pizza2",
      price: 35.5,
      ingredients: [
        { id: 1, name: "Igredient-1" },
        { id: 2, name: "Igredient-2" },
      ],
    },
  ];

  return (
    <div
      className={
        "flex w-full h-screen bg-zinc-900 flex-col px-8 justify-center"
      }
    >
      <div className={"flex flex-col gap-4"}>
        {array.map((pizza, index) => {
          return <Card key={pizza.id} pizza={pizza} />;
        })}
      </div>
    </div>
  );
};

export default Home;
