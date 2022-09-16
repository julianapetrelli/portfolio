import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;

    background-image: url('https://i.imgur.com/6j4G4uX.png');
    background-repeat: repeat;
}

button {
    cursor: pointer;
}

::-moz-selection {
  color: #fff;
  background: #6FA597;
}

::selection {
color: #fff;
  background: #6FA597;
}

#root {
    margin: 0 auto;
}

`;

export default GlobalStyle;