import { Flex, Text } from "@chakra-ui/react";

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  const fullPrice = Intl.NumberFormat("pt-Br", {
    minimumFractionDigits: 2,
  }).format(price);
  const faction = fullPrice.slice(-2);
  const integer = fullPrice.slice(0, -3);
  return (
    <Flex alignItems={"center"}>
      <Text fontWeight={"bold"} marginRight={"4px"}>
        R$
      </Text>
      <Flex alignItems={"center"} fontWeight="bold">
        <Text fontSize={"5xl"}>{integer}</Text>
        <Text fontSize={"2xl"}>,</Text>
        <Text fontSize={"2xl"}>{faction}</Text>
      </Flex>
    </Flex>
  );
};

export { Price };
