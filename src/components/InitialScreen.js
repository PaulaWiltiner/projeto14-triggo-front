import { useNavigate } from "react-router-dom";
import styled from "styled-components"; 
import triggoLogo from "../assets/images/TriggoLogo.svg";

export default function InitialScreen() {  
    const navigate = useNavigate(); 

    setTimeout(() => { 
        console.log("Troca a tela");
    }, 4000);
    
    return( 
        <WelcomeImg>
            <img src={triggoLogo} alt="triggo"/>
        </WelcomeImg>
    )
} 

const WelcomeImg = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center;
    margin-top: 150px; 
`