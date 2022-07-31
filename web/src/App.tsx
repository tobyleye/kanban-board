import { Box, ChakraProvider, Text } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BoardLayout } from "./components/BoardLayout";
import { NewBoard } from "./components/NewBoard";
import { NotFound } from "./components/NotFound";
import { theme } from "./theme";
import TestColorMode from "./components/test-color-mode";
import { SingleBoard } from "./components/SingleBoard";
import { NewTask } from "./components/NewTask";
import { Login } from "./components/Login";

function Index() {
  return (
    <Box
      w="full"
      h="full"
      display="grid"
      placeItems="center"
      textAlign="center"
    >
      <Text color="grey.light" fontSize="sm">
        You are one board away from getting started!
      </Text>
    </Box>
  );
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BoardLayout />}>
              <Route index element={<Index />} />
              <Route path="/boards/:id" element={<SingleBoard />}>
                <Route path="tasks/new" element={<NewTask />} />
              </Route>
              <Route path="new-board" element={<NewBoard />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/test-color-mode" element={<TestColorMode />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
