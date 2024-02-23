import { Link } from "react-router-dom";
import UpNavbar from "../Navbar/UpNavbar";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
const SignIn = () => {
  const { login } = useAuthContext();
  const [error, setError] = useState("");
  const [inpValues, setInpValues] = useState({
    email: "",
    pass: "",
  });

  async function hangleLogIn() {
    try {
      await login(inpValues.email, inpValues.pass);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <UpNavbar />
      <div id="sign">
        <div className="container">
          <div className="signs">
            <div className="sign">
              <div className="sign-text">
                <h1 style={{ alignItems: "center", justifyContent: "center" }}>
                  Добро пожаловать
                </h1>
                <h4>Почта</h4>
                <input
                  onChange={(e) =>
                    setInpValues({ ...inpValues, email: e.target.value })
                  }
                  placeholder="Введите свою почту"
                  type="text"
                  value={inpValues.email}
                />
                <h4>Пароль</h4>
                <input
                  onChange={(e) =>
                    setInpValues({ ...inpValues, pass: e.target.value })
                  }
                  placeholder="Введите свой пароль"
                  type="password"
                  value={inpValues.pass}
                />
              </div>
              <Link to="/">
                <button
                  onClick={hangleLogIn}
                  style={{
                    width: "100%",
                  }}
                >
                  {" "}
                  <h3>Вход</h3>
                </button>
              </Link>
              <div className="six">
                <div className="s1"></div>
                <h3>Или</h3>
                <div className="s1"></div>
              </div>
              <div className="six">
                <Link to="/register">
                  <h4>
                    У вас еще нет аккаунта?{" "}
                    <span
                      style={{
                        color: " rgb(66, 100, 223)",
                      }}
                    >
                      Зарегистироватся
                    </span>
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
