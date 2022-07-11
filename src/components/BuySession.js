
import styled from "styled-components"; 
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; 
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext } from "react";
import RenderBuySession from "./RenderBuySession";

export default function BuySession() { 
  const { productList } = useContext(UserInfosContext);
  console.log(productList);
  const [address, setAddress] = useState("");
  const [clicked, setClicked] = useState(false);
  const [error, setError] = useState(true);
  const navigate = useNavigate();  

  function sendInfo() { 
        
  }

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
                    {productList.map(product => 
                        <RenderBuySession 
                            name = {product.name}
                            price = {Number(product.price.replace(",","."))}  
                            amount = {product.amount} 
                            image = {product.image}
                        /> 
                    )}
                </ul>
            </Products> 
            
            <form onSubmit={sendInfo}>
                <Footer>
                    <input type="text" placeholder= "Endereço completo" value={address} onChange={(event) => setAddress(event.target.value)} required/>
                    <button onClick={() => setClicked(true)}>
                    {clicked ? (
                        <ThreeDots color="white" height={80} width={80} /> 
                    ) : ("Comprar") }
                    </button>
                </Footer>
            </form> 
            {error ? (
            <ErrorMessage>
                <h3>Informações Incorretas</h3>
                <h4 onClick={() => setError(false)}>X</h4>
            </ErrorMessage> ) : "" }
        </>
    )
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
` 
const Footer = styled.div`
    width: 100%; 
    height: 100%;
    margin-top: 70px;
    
    input{  
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
    button{ 
        width: 326px; 
        height: 46px; 
        display: flex; 
        justify-content: center; 
        align-items: center;
        background-color: #F6A222;
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
  }
`
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
