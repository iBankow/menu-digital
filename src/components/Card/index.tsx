import { Box, Flex, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import { IPizza } from "../../@types";
import { Price } from "./Price";

interface CardProps {
  pizza: IPizza;
}

const Card = ({ pizza }: CardProps) => {
  const ingredients = pizza.ingredients.map((ingredient) => ingredient.name);
  const display = useBreakpointValue(
    {
      base: "none",
      lg: "-webkit-box",
      sm: "-webkit-box",
      md: "-webkit-box",
    },
    {
      fallback: "md",
    }
  );
  return (
    <Flex
      bgColor={"gray.900"}
      p={4}
      border={'2px'}
      borderColor={"orange.700"}
      borderRadius={"lg"}
      boxShadow={"xl"}
      width={["100%", "100%", "3xl"]}
      height={["32"]}
      align={"center"}
      justifyContent={"space-between"}
    >
      <Box>
        <Heading>{pizza.name}</Heading>
        <Text noOfLines={2} display={display}>
          {ingredients.toString()}
        </Text>
      </Box>
      <Price price={pizza.price} />
    </Flex>
  );
};

export { Card };
