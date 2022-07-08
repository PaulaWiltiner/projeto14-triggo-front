import styled from "styled-components"; 
import TriggoLogo from "../assets/images/TriggoLogo.svg";
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom";
import { useState } from "react"; 

export default function BuySession() { 
    return(
        <>
            <Tittle>
                <ion-icon name="arrow-back-outline"></ion-icon>
                <h2>Sacola</h2>
                <h6>.</h6>
            </Tittle>        

            <Products>
                <ul>
                   <OneProduct>
                        <img src={TriggoLogo} alt="1"/> 
                        <ProductData>
                            <h3>Pao de batata</h3> 
                            <h4>R$20,00</h4>  
                            <Counter>
                                <ion-icon name="remove-circle" id="minus"></ion-icon>
                                <span>1</span> 
                                <ion-icon name="add-circle" id="plus"></ion-icon>
                            </Counter>
                            <button></button>
                        </ProductData> 
                    </OneProduct> 
                </ul>
            </Products>
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

        &:hover{ 
            cursor: pointer;
        }
    } 
    
    h2{ 
        font-family: 'Playball', cursive;
        font-size: 36px; 
        color: rgba(255, 255, 255, 1); 
    }


`
const Products = styled.div`
   width: 100%; 
   display: flex; 
   justify-content: center; 
   margin-top: 100px; 
` 
const OneProduct = styled.li`
    width: 347px; 
    height: 145px; 
    padding: 15px 0px;
    display: flex;
    justify-content: space-around; 
    background-color: rgba(255, 255, 255, 1);
    border-radius: 5px; 
    box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.15); 

    img { 
        width: 157px; 
        height: 112px;
    }
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