import styled from "styled-components";
import TriggoLogo from "../assets/images/TriggoLogo.svg";
import { useState } from "react";
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext } from "react";

export default function Products() {
  const { productList, setProductList } = useContext(UserInfosContext);
  const [colorButton, setColorButton] = useState("#f6a222");
  const [swap, setSwap] = useState(true);
  const [numCounter, setNumCounter] = useState(0);

  function counter(command) {
    if (command) {
      if (numCounter >= 1) {
        setNumCounter(numCounter - 1);
      }
    } else {
      setNumCounter(1 + numCounter);
    }
  }

  function changeButton() {
    if (swap) {
      setColorButton("#5FC25A");
      setSwap(!swap);
    } else {
      setColorButton("#f6a222");
      setSwap(!swap);
    }
  }

  function addProduct(id) {
    if (swap) {
      const list = [...productList];
      list.push(id);
      console.log(list);
      setProductList(list);
    } else {
      const list = [...productList];
      list.splice(list.indexOf(id), 1);
      console.log(list);
      setProductList(list);
    }
  }

  function OneProduct() {
    return (
      <Product>
        <img src={TriggoLogo} alt="" />
        <ProductData>
          <h3>Pao de batata</h3>
          <h4>R$ 14,90</h4>
          <Counter>
            <ion-icon
              onClick={() => counter(true)}
              name="remove-circle"
              id="minus"
            ></ion-icon>
            <span>{numCounter}</span>
            <ion-icon
              onClick={() => counter(false)}
              name="add-circle"
              id="plus"
            ></ion-icon>
          </Counter>
        </ProductData>
        <Button
          color={colorButton}
          onClick={() => [changeButton(), addProduct("1")]}
        >
          {swap ? "Adicionar" : <ion-icon name="checkmark-outline"></ion-icon>}
        </Button>
      </Product>
    );
  }
  return (
    <DivProducts>
      <Category>
        <Text>Pães</Text>
        <ProductList>
          <OneProduct />
          <OneProduct />
          <OneProduct />
          <OneProduct />
        </ProductList>
      </Category>
      <Category>
        <Text>Pizzas</Text>
        <ProductList>
          <OneProduct />
        </ProductList>
      </Category>
    </DivProducts>
  );
}

const DivProducts = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 15px;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Category = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Product = styled.div`
  min-width: 200px;
  max-width: 200px;
  height: 292px;
  display: flex;
  margin-right: 8px;
  margin-left: 25px;
  flex-direction: column;
  padding: 13px 10px 4px 10px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 8px;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15);
  position: relative;
  img {
    width: 100%;
  }
`;

const ProductList = styled.div`
  width: 100%;
  height: 280px;
  overflow-x: scroll;
  overflow-y: hidden;
  align-items: center;
  position: relative;
  display: flex;
`;

const Text = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-left: 25px;
  margin-bottom: 10px;
`;

const ProductData = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  padding: 0px 9px 4px 9px;
  justify-content: space-between;
  text-align: center;
  height: 90px;
  h3 {
    color: #f49c18;
    font-size: 16px;
    font-weight: bold;
  }
  h4 {
    color: 000000;
    font-size: 16px;
  }
`;
const Counter = styled.div`
  display: flex;
  font-size: 17px;
  justify-content: space-between;
  align-items: center;
  ion-icon#minus {
    color: #ff5656;
    width: 24px;
    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }

  ion-icon#plus {
    color: rgb(26, 204, 38);
    width: 24px;
    height: 24px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  position: absolute;
  height: 36px;
  bottom: 0px;
  left: 0px;

  color: #ffffff;
  font-size: 16px;
  font-weight: 400;
  background: ${(props) => props.color};
  display: flex;
  font-weight: 700;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.color};
  border-radius: 0px 0px 7px 7px;

  :hover {
    filter: brightness(1.1);
  }
`;
