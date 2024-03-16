/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const BebidasContext = createContext();
const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState(null);
  const [receta, setReceta] = useState({});

  useEffect(() => {
    const obtenerReceta = async () => {
      if (!bebidaId) return;
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
        const { data } = await axios(url);
        setReceta(data.drinks[0]);
      } catch (error) {
        console.error(error);
      }
    };
    obtenerReceta();
  }, [bebidaId]);

  const handleModalClick = () => {
    setModal(!modal);
  };
  const handleBebidaIdCLick = (id) => {
    setBebidaId(id);
  };
  const consultarBebida = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${datos.nombre} &c=${datos.categoria} `;
      const { data } = await axios(url);
      setBebidas(data.drinks);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <BebidasContext.Provider
      value={{
        consultarBebida,
        bebidas,
        handleModalClick,
        modal,
        handleBebidaIdCLick,
        receta,
        setReceta,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };
export default BebidasContext;
