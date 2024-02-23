import { Link } from "react-router-dom";
import gogs from "./img/Google__G__logo.svg.png";
import UpNavbar from "../Navbar/UpNavbar";
import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";

const Register = () => {
  const { register, signWithGoogle } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  console.log(error);

  async function handleRegg() {
    try {
      await register(email, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
      <UpNavbar />
      <div id="join">
        <div className="container">
          <div className="joins">
            <div className="join">
              <div className="join-text">
                <h1 style={{ alignItems: "center", justifyContent: "center" }}>
                  Регистрация
                </h1>
                <h4>Имя</h4>
                <input placeholder="Введите свое имия" type="text" />
                <h4>Фамилия</h4>
                <input placeholder="Введите свое фамилие" type="text" />
                <h4>Почта</h4>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Введите свою почту"
                  type="text"
                />
                <h4>Пароль*</h4>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите свой пароль"
                  type="password"
                />
              </div>
              <div className="wero">
                <input type="checkbox" />
                <h5>Согласен с Условием</h5>
              </div>
              <Link to="/">
                <button
                  onClick={handleRegg}
                  style={{
                    width: "100%",
                  }}
                >
                  <h3>Зарегистироваться</h3>
                </button>
              </Link>
              <div className="six">
                <div className="s1"></div>
                <h3>Или</h3>
                <div className="s1"></div>
              </div>
              {/* // onClick={()=> {navigate(/edit/${item.id}); */}
              <Link to="/">
                <button
                  onClick={() => signWithGoogle()}
                  className="btns"
                  style={{
                    background: "none",
                    color: "#181818",
                    border: " 1px solid blue",
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    paddingRight: "31px",
                    width: "100%",
                  }}
                >
                  <img
                    style={{
                      width: "28px",
                      height: "28px",
                      alignItems: "center",
                    }}
                    src={gogs}
                    alt=""
                  />
                  <h4>Google</h4>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
