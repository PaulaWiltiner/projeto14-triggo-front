import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100;200;300;400;500;600;700;800;900&family=Permanent+Marker&family=Playball&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Saira+Stencil+One&display=swap');
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
