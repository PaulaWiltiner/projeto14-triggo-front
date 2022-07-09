import styled from "styled-components";
import { useState } from "react";
import FormRegister from "../components/FormRegister";
import { Link } from "react-router-dom";
import signUp from "../data/signUp.js";
import RegisterContext from "../contexts/RegisterContext";
import TriggoLogo from "../assets/images/TriggoLogo.svg";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const [swap, setSwap] = useState(false);
  const [alert, setAlert] = useState(true);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    samePassword: "",
  });

  async function userRegister() {
    setSwap(true);
    const resp = await signUp(form);
    if (resp) {
      setForm({
        name: "",
        email: "",
        password: "",
        samePassword: "",
      });
      setAlert(true);
      setTimeout(() => {
        setSwap(false);
        navigate("/login");
      }, 500);
    } else {
      setTimeout(() => {
        setSwap(false);
        setAlert(false);
      }, 500);
    }
  }

  return (
    <RegisterContext.Provider
      value={{ form, setForm, swap, setSwap, loading, setLoading }}
    >
      <DivRegister>
        <Logo>
          <img src={TriggoLogo} alt="Triggo" />
        </Logo>

        <FormRegister />

        <Button onClick={userRegister} disabled={swap}>
          {swap ? (
            <ThreeDots color="#ffffff" height={40} width={80} />
          ) : (
            "Cadastrar"
          )}
        </Button>
        {alert ? null : (
          <ErrorMessage>
            <h3>Informações Incorretas</h3>
            <h4 onClick={() => setAlert(true)}>X</h4>
          </ErrorMessage>
        )}

        <MyLink to="/login">
          <TextLogin>Já tem uma conta? Entre agora!</TextLogin>
        </MyLink>
      </DivRegister>
    </RegisterContext.Provider>
  );
}

const Logo = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 300px;
    height: 200px;
  }
`;
const MyLink = styled(Link)`
  text-decoration: none;
  margin-top: 50px;
`;

const DivRegister = styled.div`
  width: 100%;
  height: 94vh;
  margin-top: -2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ErrorMessage = styled.div`
  width: 326px;
  height: 58px;
  background-color: #ff7474;
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 20px;
  border-radius: 5px;
  margin-bottom: -1em;

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

const TextLogin = styled.h2`
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  color: #ffffff;
`;
const Button = styled.button`
  width: 326px;
  height: 46px;

  color: #ffffff;
  font-size: 21px;
  font-weight: 400;
  background: #f6a222;
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  border: 1px solid #f6a222;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  }
`;
