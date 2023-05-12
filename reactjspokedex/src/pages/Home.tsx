import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { api } from "../services/api";
import { CardPokemon } from "../components/Card";

interface Pokemon {
  name: string;
  image: string;
}

export const Home: FC = () => {
  const [pokedex, setPokedex] = useState<Pokemon[]>([]);

  const refPokemonInput = useRef<HTMLInputElement>(null);

  const handlePokemonInPokedex = () => {
    api.get(`/pokemon/${refPokemonInput.current?.value}`).then((res) => {
      setPokedex((current) => [
        ...current,
        {
          name: refPokemonInput.current?.value || "Sem Nome",
          image: res.data.sprites.front_default,
        },
      ]);
    });
  };
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bg="#00296b"
    >
      <Box
        w="800px"
        h="500px"
        bg="white"
        border="1px solid #ddd"
        borderRadius="10px"
        p={10}
      >
        <Box
          w="100%"
          h="80px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={10}
        >
          <Input fontSize={24} bg="#fdc500" h="60px" ref={refPokemonInput} />
          <Button
            fontSize={16}
            minW="100px"
            h="60px"
            onClick={handlePokemonInPokedex}
            bg="#ffd500"
            _hover={{
              bg: "#fdc500",
            }}
          >
            Adicionar
          </Button>
        </Box>
        <Flex gap={2} wrap="wrap" overflowY="scroll" maxH="86%">
          {pokedex.map((pokemon) => (
            <CardPokemon name={pokemon.name} source={pokemon.image} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};
