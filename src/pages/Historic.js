import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Order from "../components/MyOrders";

export default function Historic() {
  const navigate = useNavigate();

  const products = [
    {
      name: "pao de alho",
      price: 20,
      amount: 3,
      image:
        "https://www.sabornamesa.com.br/media/k2/items/cache/68fd1d661976b9d8b879f7809970f2e8_XL.jpg",
    },
    {
      name: "pao de alho",
      price: 20,
      amount: 3,
      image:
        "https://www.sabornamesa.com.br/media/k2/items/cache/68fd1d661976b9d8b879f7809970f2e8_XL.jpg",
    },
  ];

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
          {products.map((product) => (
            <Order
              name={product.name}
              price={product.price}
              amount={product.amount}
              image={product.image}
            />
          ))}
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
