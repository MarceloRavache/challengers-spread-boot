import { Box, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

interface CardPokemonProps {
  name: string;
  source: string;
}

export const CardPokemon: FC<CardPokemonProps> = ({ name, source }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      border="1px solid #003f88"
      maxW="150px"
      borderRadius="10px"
      bg="#00509d"
    >
      <Text color="white" fontSize={18} fontWeight="bold">
        {name}
      </Text>
      <Image w="120px" src={source} />
    </Box>
  );
};
