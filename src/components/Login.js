import styled from "styled-components"; 
import TriggoLogo from "../assets/images/TriggoLogo.svg";
import { ThreeDots } from  'react-loader-spinner'; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() { 
    const [clicked, setClicked] = useState(false); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [error, setError] = useState(true);

    const navigate = useNavigate(); 
    return( 
        <>
        <Logo>
            <img src={TriggoLogo} alt="Triggo"/>
        </Logo> 
        
        <form>
            <Data error={error}>
            <input type="email" placeholder= "Email" value={email} onChange={(event) => setEmail(event.target.value)} required/>
            <input type="password" placeholder="Senha" value={password} onChange={(event) => setPassword(event.target.value)} required/>  
            <button onClick={() => setClicked(true)}>
                {clicked ? (
                    <ThreeDots color="white" height={80} width={80} /> 
                ) : ("Entrar") }
            </button>
            </Data> 
        </form> 
        
        {error ? (
        <ErrorMessage>
            <h3>Informações Incorretas</h3>
            <h4 onClick={() => setError(false)}>X</h4>
        </ErrorMessage> ) : "" }

        <Link to="/signUp"><Message>Primeira vez? Cadastre-se!</Message></Link> 
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
    margin-bottom: ${props => props.error ? "14px" : "32px" };

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
    font-size: 15px; 
    font-weight: 700;   
    text-decoration: underline; 
    text-decoration-color: #F7BC58;

    &:hover { 
        cursor: pointer; 
    }
`
const ErrorMessage = styled.div`
    width: 326px; 
    height: 58px;
    background-color: #FF7474; 
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px 0px 20px;
    border-radius: 5px;
    margin-bottom: 20px; 

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
`
