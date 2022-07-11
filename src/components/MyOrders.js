import { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import UserInfosContext from "../contexts/UserInfosContext";

export default function MyOrders({ name, price, amount, image }) {
  const navigate = useNavigate();
  const { setProductList } = useContext(UserInfosContext);
  return (
    <OneOrder>
      <OrderData>
        <h3>Pedido</h3>
        <ListData>
          <OneProduct>
            <Amount>2</Amount>
            <Text>{name}</Text>
          </OneProduct>
          <OneProduct>
            <Amount>{amount}</Amount>
            <Text>Pizza de Mussarela</Text>
          </OneProduct>
          <OneProduct>
            <Amount>{amount}</Amount>
            <Text>{name}</Text>
          </OneProduct>
          <OneProduct>
            <Amount>{amount}</Amount>
            <Text>Pizza de Mussarela</Text>
          </OneProduct>
        </ListData>
      </OrderData>
      <Button>
        <ion-icon
          onClick={() => navigate("/buysession")}
          name="cart-outline"
        ></ion-icon>
      </Button>
    </OneOrder>
  );
}

const OneOrder = styled.li`
  width: 347px;
  height: 145px;
  padding: 15px 15px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  margin-bottom: 20px;

  img {
    width: 157px;
    height: 112px;
  }
`;

const OrderData = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    color: 000000;
    font-size: 16px;
  }
`;

const ListData = styled.div`
  width: 100%;
  margin-top: 10px;
  overflow-y: scroll;
`;

const OneProduct = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
`;

const Amount = styled.div`
  background-color: #f6a222;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 20px;
  height: 20px;
  border-radius: 5px;
`;

const Text = styled.h2`
  color: 000000;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;

const Button = styled.button`
  width: 105px;
  height: 100%;
  background-color: #5fc25a;
  color: rgba(255, 255, 255, 1);
  border-radius: 5px;
  border: none;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  font-size: 40px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;
