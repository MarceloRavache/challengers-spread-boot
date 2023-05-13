import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
import { useState } from "react";
function App() {
  const [operations, setOperations] = useState<string[]>([]);
  const [result, setResult] = useState<number>();

  const handleClickOperation = (value: string) => {
    setOperations((current) => [...current, value]);
  };

  const submitResult = () => {
    let operation = "";
    setOperations([
      operations
        .reduce((acul, ocrr) => {
          if (operation === "+") {
            operation = "";
            return acul + Number(ocrr);
          } else if (operation === "-") {
            operation = "";

            return acul - Number(ocrr);
          } else if (operation === "x") {
            operation = "";
            console.log(acul, Number(ocrr));

            return acul * Number(ocrr);
          } else if (operation === "/") {
            operation = "";

            return acul / Number(ocrr);
          } else if (["+", "-", "x", "/"].includes(ocrr)) {
            operation = ocrr;
            return acul;
          } else {
            return Number(ocrr);
          }
        }, 0)
        .toString(),
    ]);
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        flexDirection="column"
        maxW="600px"
        w="100%"
        bg="white"
        color="black"
        borderRadius={10}
        p={10}
      >
        <Box
          w="100%"
          display="flex"
          justifyContent="left"
          alignItems="center"
          px={20}
          fontWeight="bold"
          fontSize={24}
        >
          Resultado:{operations.join(" ")}
        </Box>

        <Grid templateColumns="25% 25% 25% 25%">
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("1")}
          >
            1
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("2")}
          >
            2
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("3")}
          >
            3
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("+")}
          >
            +
          </GridItem>
        </Grid>
        <Grid templateColumns="25% 25% 25% 25%">
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("4")}
          >
            4
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("5")}
          >
            5
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("6")}
          >
            6
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("-")}
          >
            -
          </GridItem>
        </Grid>
        <Grid templateColumns="25% 25% 25% 25%">
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("7")}
          >
            7
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("8")}
          >
            8
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("9")}
          >
            9
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("x")}
          >
            x
          </GridItem>
        </Grid>
        <Grid templateColumns="25% 25% 25% 25%">
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
          ></GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("+")}
          >
            0
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={submitResult}
          >
            OK
          </GridItem>
          <GridItem
            border="1px solid black"
            borderRadius={8}
            display="flex"
            justifyContent="center"
            m={10}
            cursor="pointer"
            onClick={() => handleClickOperation("/")}
          >
            /
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
}

export default App;
