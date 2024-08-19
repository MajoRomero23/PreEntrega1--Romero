import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <ItemListContainer greeting = "¡Hola!, Bienvenido a Cine Actual"/>
    </ChakraProvider>
  );
}

export default App;