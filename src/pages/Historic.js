import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Order from "../components/MyOrders";
import { useState, useEffect } from "react";
import getUserProducts from "../data/getUserProducts";
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext } from "react";

export default function Historic() {
  const navigate = useNavigate();
  const [orderList, setOrderList] = useState([]);
  const { token } = useContext(UserInfosContext);

  useEffect(() => {
    getUserProducts(token).then((list) => {
      console.log(list.response.data);
      setOrderList(list.response.data[0].historic);
    });
  }, []);

  return (
    <>
      <Tittle>
        <ion-icon
          name="arrow-back-outline"
          onClick={() => navigate("/mainscreen")}
        ></ion-icon>
        <h2>Meus Pedidos</h2>
        <h6>.</h6>
      </Tittle>

      <Products>
        <ul>
          {orderList.length !== 0
            ? orderList.map((product) => <Order orderList={product} />)
            : null}
        </ul>
      </Products>
    </>
  );
}

const Tittle = styled.div`
  width: 360px;
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
  margin-top: 70px;
`;
