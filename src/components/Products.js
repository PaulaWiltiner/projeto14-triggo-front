import styled from "styled-components";
import { useState, useEffect } from "react";
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext } from "react";
import getProductList from "../data/getProductList";

export default function Products() {
  const { productList, setProductList } = useContext(UserInfosContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductList().then((list) => setProducts(list.response.data));
  }, []);

  function counter(command, id, verif) {
    if (verif === false) {
      const prod = productList.filter((elem) => id === elem.id);
      if (command) {
        if (prod[0].amount > 1) {
          const list = [...productList];
          const newList = list.map((item) => {
            if (item.id === id) {
              return {
                id: id,
                amount: item.amount - 1,
                name: item.name,
                image: item.image,
                price: item.price,
              };
            }
            return item;
          });
          setProductList(newList);
          console.log(productList);
        }
      } else {
        const list = [...productList];
        const newList = list.map((item) => {
          if (item.id === id) {
            return {
              id: id,
              amount: item.amount + 1,
              name: item.name,
              image: item.image,
              price: item.price,
            };
          }
          return item;
        });
        setProductList(newList);
      }
    }
  }

  function addProduct(id, swap, name, image, price) {
    if (swap) {
      const list = [...productList];
      list.push({ id: id, amount: 1, name: name, image: image, price: price });
      setProductList(list);
      console.log(list);
    } else {
      const list = [...productList];
      list.splice(list.indexOf(id), 1);
      setProductList(list);
      console.log(list);
    }
  }

  function OneProduct(props) {
    return (
      <Product>
        <img src={props.infos.image} alt="" />
        <ProductData>
          <h3>{props.infos.name}</h3>
          <h4>R$ {props.infos.price}</h4>
          <h4>{props.infos.description}</h4>
          <Counter>
            <ion-icon
              onClick={() => counter(true, props.infos._id, props.swap)}
              name="remove-circle"
              id="minus"
            ></ion-icon>
            <span>{props.amount}</span>
            <ion-icon
              onClick={() => counter(false, props.infos._id, props.swap)}
              name="add-circle"
              id="plus"
            ></ion-icon>
          </Counter>
        </ProductData>
        <Button
          color={props.colorButton}
          onClick={() =>
            addProduct(
              props.infos._id,
              props.swap,
              props.infos.name,
              props.infos.image,
              props.infos.price
            )
          }
        >
          {props.swap ? (
            "Adicionar"
          ) : (
            <ion-icon name="checkmark-outline"></ion-icon>
          )}
        </Button>
      </Product>
    );
  }
  return (
    <DivProducts>
      <Category>
        <Text>Pães</Text>
        <ProductList>
          {products
            ? products.map((item, index) => {
                let color = "#f6a222";
                let swap = true;
                let amount = 0;
                if (productList.some((elem) => elem.id === item._id)) {
                  color = "#5FC25A";
                  swap = false;
                  const prod = productList.filter(
                    (elem) => item._id === elem.id
                  );
                  amount = prod[0].amount;
                }
                if (item.category === "paes") {
                  return (
                    <OneProduct
                      key={index}
                      swap={swap}
                      infos={item}
                      colorButton={color}
                      amount={amount}
                    />
                  );
                }
                return null;
              })
            : ""}
        </ProductList>
      </Category>
      <Category>
        <Text>Pizzas</Text>
        <ProductList>
          {products
            ? products.map((item, index) => {
                let color = "#f6a222";
                let swap = true;
                let amount = 0;
                if (productList.some((elem) => elem.id === item._id)) {
                  color = "#5FC25A";
                  swap = false;
                  const prod = productList.filter(
                    (elem) => item._id === elem.id
                  );
                  amount = prod[0].amount;
                }
                if (item.category === "pizzas") {
                  return (
                    <OneProduct
                      key={index}
                      swap={swap}
                      infos={item}
                      colorButton={color}
                      amount={amount}
                    />
                  );
                }
                return null;
              })
            : ""}
        </ProductList>
      </Category>
      <Category>
        <Text>Tortas</Text>
        <ProductList>
          {products
            ? products.map((item, index) => {
                let color = "#f6a222";
                let swap = true;
                let amount = 0;
                if (productList.some((elem) => elem.id === item._id)) {
                  color = "#5FC25A";
                  swap = false;
                  const prod = productList.filter(
                    (elem) => item._id === elem.id
                  );
                  amount = prod[0].amount;
                }
                if (item.category === "tortas") {
                  return (
                    <OneProduct
                      key={index}
                      swap={swap}
                      infos={item}
                      colorButton={color}
                      amount={amount}
                    />
                  );
                }
                return null;
              })
            : ""}
        </ProductList>
      </Category>
    </DivProducts>
  );
}

const DivProducts = styled.div`
  width: 100%;
  height: 200vh;
  margin-top: 15px;
  padding-bottom: 100px;
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
  height: 280px;
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
    width: 180px;
    height: 120px;
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
  height: 40px;
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

  ion-icon {
    font-size: 24px;
  }

  :hover {
    filter: brightness(1.1);
  }
`;
