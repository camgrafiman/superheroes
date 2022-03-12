import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { useNavigate } from "react-router-dom";
import { types } from "../../types/types";

export const LoginScreen = () => {
  const context = useContext(AuthContext);
  console.log(context);
  // Uso el hook de useNavigate v6:
  const navigate = useNavigate();

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: "Alejandro Gallego",
      },
    };
    context.dispatch(action);

    const lastPath = localStorage.getItem("lastPath") || "/dc";
    // Enviar al usuario a una ruta reemplazando la historia de navegación (para que no se pueda ir para atrás)
    navigate(lastPath, {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>LoginScreen</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
