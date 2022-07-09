import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Playball&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  *{
    box-sizing:border-box;
  }
  body{
    background-color:#FFBD59;
  }
  .root {
    background-color:#FFBD59;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin:25px;
    font-family:  'Raleway', sans-serif;
  }

  .root button, input {
    font-family:  'Raleway', sans-serif;
  }
  
`;

export default GlobalStyle;
