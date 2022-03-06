import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  // Uso el hook de useNavigate v6:
  const navigate = useNavigate();

  const handleLogin = () => {
    // Enviar al usuario a una ruta reemplazando la historia de navegación (para que no se pueda ir para atrás)
    navigate("/dc", {
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
