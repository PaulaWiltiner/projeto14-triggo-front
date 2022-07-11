import styled from "styled-components";
import TriggoLogo from "../assets/images/TriggoLogo.svg";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import UserInfosContext from "../contexts/UserInfosContext";
import { Link } from "react-router-dom";
import axios from "axios";
import LoginContext from "../contexts/LoginContext";

export default function Login() {
  const [clicked, setClicked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setToken } = useContext(UserInfosContext);
  const navigate = useNavigate();

  function sendInfo(event) {
    event.preventDefault();

    setClicked(true);
    const info = { email, password };
    const promise = axios.post(
      "https://projeto14-triggo-back.herokuapp.com/sign-in",
      info
    );

    promise.then((response) => {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log(response.data);
      setError(false);
      navigate("/mainscreen");
    });

    promise.catch((error) => {
      console.log(error);
      setPassword("");
      setError(true);
      setTimeout(() => {
        setClicked(false);
      }, 1000);
    });
  }

  return (
    <>
      <Logo>
        <img src={TriggoLogo} alt="Triggo" />
      </Logo>

      <form onSubmit={sendInfo}>
        <Data error={error}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <button onClick={() => setClicked(true)}>
            {clicked ? (
              <ThreeDots color="white" height={80} width={80} />
            ) : (
              "Entrar"
            )}
          </button>
        </Data>
      </form>

      {error ? (
        <ErrorMessage>
          <h3>Informações Incorretas</h3>
          <h4 onClick={() => setError(false)}>X</h4>
        </ErrorMessage>
      ) : (
        ""
      )}

      <Link to="/register">
        <Message>Primeira vez? Cadastre-se!</Message>
      </Link>
    </>
  );
}

const Logo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 300px;
    height: 200px;
  }
`;
const Data = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: ${(props) => (props.error ? "14px" : "32px")};

  input {
    width: 326px;
    height: 58px;
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    font-color: rgba(0, 0, 0, 1);
    padding-left: 15px;
    font-size: 20px;
    margin-bottom: 14px;
    border-radius: 5px;
    border: none;
  }

  button {
    width: 326px;
    height: 46px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f6a222;
    color: rgba(255, 255, 255, 1);
    font-size: 20px;
    border-radius: 5px;
    border: none;
    font-weight: bold;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);

    &:hover {
      cursor: pointer;
    }
  }
`;
const Message = styled.div`
  display: flex;
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  font-size: 15px;
  font-weight: 700;
  text-decoration: underline;
  text-decoration-color: #f7bc58;

  &:hover {
    cursor: pointer;
  }
`;
const ErrorMessage = styled.div`
  width: 326px;
  height: 58px;
  background-color: #ff7474;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  border-radius: 5px;
  margin-bottom: 20px;

  h4 {
    font-size: 14px;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);

    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
    font-weight: 700;
  }
`;
