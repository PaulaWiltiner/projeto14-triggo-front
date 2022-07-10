import styled from "styled-components";
import Triggo from "../assets/images/Triggo.png";
import { useNavigate } from "react-router-dom";

export default function BuyFinish() {
  const navigate = useNavigate();
  return (
    <DivBuyFinish>
      <Text>Seu pedido foi realizado com sucesso ! </Text>
      <img src={Triggo} alt="" />
      <Button onClick={() => navigate("/")}>OK</Button>
    </DivBuyFinish>
  );
}

const Text = styled.h1`
  font-size: 36px;
  width: 200px;
  line-height: 45px;
  font-family: "Playball", cursive;
  position: absolute;
  top: 250px;
  left: 44px;
  z-index: 1;
  color: #ffffff;
`;

const DivBuyFinish = styled.h1`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  img {
    margin-top: -8em;
    margin-right: -6em;
    object-fit: none;
  }
`;

const Button = styled.button`
  width: 66px;
  height: 60px;
  margin-top: 20px;

  color: #f6a222;
  font-size: 21px;
  font-weight: 400;
  background: #ffffff;
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  border: 1px solid #ffffff;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  :hover {
    filter: brightness(1.1);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.15);
  }
`;
