import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
   body{

height: 100%;
width: 1000px;
background-color:skyblue;
background-image:		
    url('https://i.imgur.com/oZGefuq.png'),
    url('https://i.imgur.com/M0WwoLX.png'),
    url('https://i.imgur.com/9rgdDvq.png'),
    url('https://i.imgur.com/nAZ4fu0.png');
background-repeat: repeat-x;
background-position: 
   
    0 100%,
    0 50%,
    0 100%,
    0 0;

background-size: 

    1200px 400px,
    1000px,
    2000px 1000px,
    2000px;
animation: 50s para infinite linear;
}

@keyframes para {
100% {
    background-position: 
   
        0px 100%,
        500px 50%,
        0px 100%,
        1000px 100%;
    }
}
`;
