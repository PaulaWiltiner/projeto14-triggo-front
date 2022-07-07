import styled from "styled-components"; 
import TriggoLogo from "../assets/styles/images/TriggoLogo.svg";
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() { 
    const [clicked, setClicked] = useState(false); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    const navigate = useNavigate(); 
    return( 
        <>
        <Logo>
            <img src={TriggoLogo} alt="Triggo"/>
        </Logo> 
        
        <form>
            <Data>
            <input type="email" placeholder= "Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} required/>  
            <button onClick={() => setClicked(true)}>
                {clicked ? (
                    <ThreeDots color="white" height={80} width={80} /> 
                ) : ("Entrar") }
            </button>
            </Data> 
        </form> 
        
        <Link to="/signUp"><Message>Primeira vez? Cadastre-se!</Message></Link> 

        <ErrorMessage> 
            <ion-icon name="close-circle"></ion-icon>
            <h3>Email ou senha inválidos</h3>
        </ErrorMessage>
        </>
    )
} 

const Logo = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 

    img{ 
        width: 300px;
        height: 200px;
    }
`
const Data = styled.div` 
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    flex-direction: column;  

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
` 
const Message = styled.div`
    display: flex; 
    justify-content: center; 
    color: rgba(255, 255, 255, 1);
    font-size: 20px; 
    font-weight: 700;  
    margin-top: 32px; 
    text-decoration: underline; 
    text-decoration-color: #F7BC58;

    &:hover { 
        cursor: pointer; 
    }
`
const ErrorMessage = styled.div`
    width: 250px; 
    height: 40px; 
    background-color: rgb(242, 125, 101); 
    display: flex; 
    align-items: center;
    justify-content: center;
    border-radius: 5px;  
    margin-top: 15px;

    ion-icon { 
        color: red; 
        margin-right: 10px;
    } 

    h3 { 
        color: rgba(255, 255, 255, 1);
        font-size: 16px; 
        font-weight: 500;  
    }
`
