import useBebidas from "../hooks/useBebidas";
import { Row } from "react-bootstrap";
import Bebida from "./Bebida";

const ListadoBebida = () => {
  const { bebidas } = useBebidas();
  return (
    <Row>
      {bebidas.map((bebida) => (
        <Bebida key={bebida.idDrink} bebida={bebida} />
      ))}
    </Row>
  );
};

export default ListadoBebida;
