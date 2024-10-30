import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
},

body {
	background: #21052d;
	color: #f5f5f5;
	font-family: "Manrope", sans-serif;
	min-height: 100vh;
}
`;
