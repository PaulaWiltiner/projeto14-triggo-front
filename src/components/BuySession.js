import styled from "styled-components";
import TriggoLogo from "../assets/images/TriggoLogo.svg";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function BuySession() {
  const [address, setAddress] = useState("");
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(true);
  let counter = 0;
  let price = 20;
  const navigate = useNavigate();

  return (
    <>
      <Tittle>
        <ion-icon
          name="arrow-back-outline"
          onClick={() => navigate("/mainscreen")}
        ></ion-icon>
        <h2>Sacola</h2>
        <h6>.</h6>
      </Tittle>

      <Products>
        <ul>
          <OneProduct>
            <img src={TriggoLogo} alt="1" />
            <BallCounter>{counter}</BallCounter>
            <ProductData>
              <h3>Pao de batata</h3>
              <h4>R${(price * counter).toFixed(2)}</h4>
              <Counter>
                <ion-icon name="remove-circle" id="minus"></ion-icon>
                <span>{counter}</span>
                <ion-icon name="add-circle" id="plus"></ion-icon>
              </Counter>
              {counter !== 0 ? (
                <button id="refresh">Atualizar</button>
              ) : (
                <button id="delete">Remover</button>
              )}
            </ProductData>
          </OneProduct>
        </ul>
      </Products>

      <form>
        <Footer>
          <input
            type="text"
            placeholder="Endereço completo"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
          />
          <button onClick={() => setClicked(true)}>
            {clicked ? (
              <ThreeDots color="white" height={80} width={80} />
            ) : (
              "Comprar"
            )}
          </button>
        </Footer>
      </form>
      {error ? (
        <ErrorMessage>
          <h3>Informações Incorretas</h3>
          <h4 onClick={() => setError(false)}>X</h4>
        </ErrorMessage>
      ) : (
        ""
      )}
    </>
  );
}

const Tittle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ion-icon {
    color: rgba(255, 255, 255, 1);
    width: 40px;
    height: 40px;
    &:hover {
      cursor: pointer;
    }
  }

  h2 {
    font-family: "Playball", cursive;
    font-size: 36px;
    color: rgba(255, 255, 255, 1);
  }
`;
const Products = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;
const OneProduct = styled.li`
  width: 347px;
  height: 145px;
  padding: 15px 0px;
  display: flex;
  justify-content: space-around;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  img {
    width: 157px;
    height: 112px;
  }
`;
const BallCounter = styled.div`
  width: 24px;
  height: 24px;
  background-color: #f6a222;
  font-size: 16px;
  color: rgba(255, 255, 255, 1);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 160px;
  bottom: 13px;
`;
const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  h3 {
    color: #f49c18;
    font-size: 16px;
    font-weight: bold;
  }
  h4 {
    color: 000000;
    font-size: 16px;
    font-weight: bold;
  }
  button#refresh {
    width: 105px;
    height: 19px;
    background-color: #f6a222;
    color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    font-size: 10px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
  button#delete {
    width: 105px;
    height: 19px;
    background-color: #ff5656;
    color: rgba(255, 255, 255, 1);
    border-radius: 5px;
    border: none;
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
    font-size: 10px;
    font-weight: bold;
    &:hover {
      cursor: pointer;
    }
  }
`;
const Counter = styled.div`
  display: flex;
  justify-content: space-between;
  ion-icon#minus {
    color: #ff5656;
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  }

  ion-icon#plus {
    color: rgb(26, 204, 38);
    width: 20px;
    height: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;
const Footer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 70px;

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
  margin-top: 15px;
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
