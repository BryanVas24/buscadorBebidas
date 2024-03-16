/* eslint-disable react/prop-types */
import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";

const Bebida = ({ bebida }) => {
  const { handleModalClick, handleBebidaIdCLick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4 mt-4">
        <Card.Img
          variant="top"
          src={bebida.strDrinkThumb}
          alt={`Imagen de ${bebida.strDrink}`}
        />
        <Card.Body>
          <Card.Title>{bebida.strDrink}</Card.Title>
          <Card.Text>
            Presiona en ver receta para conocer más sobre la bebida
          </Card.Text>
          <Button
            variant="danger"
            onClick={() => {
              handleModalClick();
              handleBebidaIdCLick(bebida.idDrink);
            }}
          >
            VER RECETA
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
