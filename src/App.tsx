import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Card } from "./components/Card";

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
  {
    id: 3,
    name: "Pizza2",
    price: 5.5,
    ingredients: [
      { id: 1, name: "Igredient-1" },
      { id: 2, name: "Igredient-2" },
    ],
  },
];

function App() {
  const [pizzas, setPizzas] = useState(array);

  return (
    <VStack spacing={4}>
      {pizzas.map((pizza) => {
        return <Card key={pizza.id} pizza={pizza} />;
      })}
    </VStack>
  );
}

export { App };
