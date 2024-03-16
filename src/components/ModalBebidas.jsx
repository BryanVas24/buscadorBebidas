import {
  Modal,
  Image,
  ModalHeader,
  ModalTitle,
  ModalBody,
} from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
const ModalBebidas = () => {
  const { modal, handleModalClick, receta, setReceta } = useBebidas();
  const mostrarIngredientes = () => {
    let ingredientes = [];
    for (let i = 1; i < 16; i++) {
      if (receta[`strIngredient${i}`]) {
        ingredientes.push(
          <li>
            {receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredientes;
  };

  return (
    <Modal
      show={modal}
      onHide={() => {
        handleModalClick();
        setReceta({});
      }}
    >
      <Image
        src={receta.strDrinkThumb}
        alt={`Imagen receta de ${receta.strDrink}`}
      />
      <ModalHeader>
        <ModalTitle>{receta.strDrink}</ModalTitle>
      </ModalHeader>
      <ModalBody>
        <div className="p-3">
          <h2>Instrucciones:</h2>
          <p>
            {!receta.strInstructionsES
              ? receta.strInstructions
              : receta.strInstructionsES}
          </p>
          <h2>Ingredientes y cantidades</h2>
          {mostrarIngredientes()}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalBebidas;
