/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useEffect, useState } from "react";

const categoriaContext = createContext();
const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);
  const obtenerCategorias = async () => {
    try {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
      const { data } = await axios(url);
      setCategorias(data.drinks);
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    obtenerCategorias();
  }, []);
  return (
    <categoriaContext.Provider value={{ categorias }}>
      {children}
    </categoriaContext.Provider>
  );
};

export { CategoriasProvider };
export default categoriaContext;
