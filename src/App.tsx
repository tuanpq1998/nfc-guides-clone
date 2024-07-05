import { Box, Flex } from "@chakra-ui/react";
import "./App.css";
import Check from "./component/Check";
import Guide from "./component/Guide";

function App() {
  return (
    <Flex
      direction={{
        base: "column",
        md: "row",
      }}
      w={"100vw"}
      h={"100vh"}
      alignItems="center"
      gap="0"
    >
      <Box w={"100%"} h={"100%"}>
        <Check />
      </Box>
      <Box
        w={"100%"}
        h={{
          base: "unset",
          md: "100%",
        }}
        bg={"purple.900"}
        color={"gray.50"}
        overflowY={{
          base: "unset",
          md: "scroll",
        }}
      >
        <Guide />
      </Box>
    </Flex>
  );
}

export default App;
