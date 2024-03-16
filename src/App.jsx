import { Container } from "react-bootstrap";
import Formulario from "./components/Formulario";
import { CategoriasProvider } from "./context/CategoriasProvider";
import { BebidasProvider } from "./context/BebidasProvider";
import ListadoBebida from "./components/ListadoBebida";
import ModalBebidas from "./components/ModalBebidas";

function App() {
  return (
    <CategoriasProvider>
      <BebidasProvider>
        <header className="py-5">
          <h1>Buscador de medidas</h1>
        </header>
        <Container className="mt-5">
          <Formulario />
          <ListadoBebida />
          <ModalBebidas />
        </Container>
      </BebidasProvider>
    </CategoriasProvider>
  );
}

export default App;
