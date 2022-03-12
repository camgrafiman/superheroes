/* [Contexto] Nos permite proveer nuestro estado y dispatch de las acciones del reducer a lo largo de toda la aplicación */
/* provee info a todos los componentes hijos */
import { createContext } from "react";
/* Crea el componente con Context */
export const AuthContext = createContext();
