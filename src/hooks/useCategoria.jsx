import { useContext } from "react";
import categoriaContext from "../context/CategoriasProvider";

const useCategoria = () => {
  return useContext(categoriaContext);
};

export default useCategoria;
