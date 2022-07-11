import { useState } from "react";
import styled from "styled-components"; 
import UserInfosContext from "../contexts/UserInfosContext";
import { useContext } from "react";

export default function RenderBuySession ({name, price, amount, image, id, remove}) { 
    const { productList, setProductList } = useContext(UserInfosContext);
    let [counter, setCounter] = useState(amount); 

    function contItens(event) {  
        if(event === "minus" && counter>0) { 
            setCounter(counter--); 
        } else if(event === "plus") { 
            setCounter(counter++); 
        }
    } 

    return( 
        <OneProduct>
            <img src={image} alt={image}/> 
            <BallCounter>{counter}</BallCounter>
            <ProductData>
                <h3>{name}</h3> 
                <h4>R${(price * counter).toFixed(2).replace(".",",")}</h4>  
                <Counter>
                    <ion-icon name="remove-circle" id="minus" onClick={() => contItens("minus")}></ion-icon>
                    <span>{counter}</span> 
                    <ion-icon name="add-circle" id="plus" onClick={() => contItens("plus")}></ion-icon>
                </Counter> 
                {counter !== 0 ? (
                    <button id="refresh">Atualizar</button> ) : (
                    <button id="delete" onClick={() => remove(id,name)}>Remover</button> )}
            </ProductData> 
        </OneProduct> 
    )
} 

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
    margin-bottom: 20px;

    img { 
        width: 157px; 
        height: 112px;
    }
`
const BallCounter = styled.div` 
    width: 24px; 
    height: 24px; 
    background-color: #F6A222; 
    font-size: 16px;  
    color: rgba(255, 255, 255, 1);  
    border-radius: 50%;
    display: flex; 
    justify-content: center; 
    align-items: center; 
    position: absolute;
    left: 160px;
    bottom: 13px;
`
const ProductData = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    text-align: center; 
    h3 { 
        color: #F49C18; 
        font-size: 16px; 
        font-weight: bold;
    } 
    h4{
        color: 000000; 
        font-size: 16px; 
        font-weight: bold;
    } 
    button#refresh{ 
        width: 105px; 
        height: 19px; 
        background-color: #F6A222; 
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
    button#delete{ 
        width: 105px; 
        height: 19px; 
        background-color: #FF5656; 
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
`
const Counter = styled.div`
    display: flex; 
    justify-content: space-between; 
    ion-icon#minus { 
        color: #FF5656;
        width: 20px;
        height: 20px; 
        
        &:hover{
            cursor: pointer;
        }
    } 
    
    ion-icon#plus { 
        color: rgb(26, 204, 38);
        width: 20px;
        height: 20px; 
        
        &:hover{
            cursor: pointer;
        }
    }
`