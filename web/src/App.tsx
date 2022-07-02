import { ChakraProvider } from "@chakra-ui/react";
import { Greetings } from "./Greetings";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Greetings />
      </div>
    </ChakraProvider>
  );
}

export default App;
