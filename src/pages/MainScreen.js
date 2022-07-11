import styled from "styled-components";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import TriggoTitle from "../assets/images/TriggoTitle.png";
import UserInfosContext from "../contexts/UserInfosContext";

export default function MainScreen() {
  const { productList } = useContext(UserInfosContext);
  const navigate = useNavigate();

  return (
    <DivMain>
      <Header>
        <img src={TriggoTitle} alt="Triggo" />
        <ion-icon onClick={() => navigate("/")} name="exit-outline"></ion-icon>
      </Header>
      <Products />
      <Foter>
        <ion-icon
          onClick={() => navigate("/")}
          name="document-text-outline"
        ></ion-icon>

        <DivBasket>
          <ion-icon
            onClick={() => navigate("/buy")}
            name="basket-outline"
          ></ion-icon>
          <BallCounter>{productList.length}</BallCounter>
        </DivBasket>
      </Foter>
    </DivMain>
  );
}

const DivBasket = styled.div`
  position: relative;
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
  right: -0.5em;
  bottom: -0.3em;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
  }
  ion-icon {
    color: #ffffff;
    margin-right: -1.5em;
    margin-left: 40px;
    font-size: 38px;
  }
`;

const Foter = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0.5px 0.5px 0.5px 2.5px rgba(172, 175, 171, 0.1);

  ion-icon {
    color: #f6a222;
    font-size: 39px;
  }
`;

const DivMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
`;
