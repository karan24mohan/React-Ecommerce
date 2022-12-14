import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  /* scroll-behavior: smooth; */
  /* 1rem = 10px */
  overflow-x: hidden;
}
body {
  overflow-x: hidden;
   scrollbar-color: rgb(98 84 243);
    scrollbar-width: thin;
}
body::-webkit-scrollbar {
  width: 1.5rem;
}
body::-webkit-scrollbar-track {
   background-color: rgb(24 24 29);
}
body::-webkit-scrollbar-thumb {
 
  background: #fff;
    border: 5px solid transparent;
    border-radius: 9px;
    background-clip: content-box;
}
h1,
h2,
h3,
h4 {
   font-family: "Work Sans", sans-serif;
}
h1 {
  color: ${({ theme }) => theme.colors.heading};
  font-size: 6rem;
  font-weight: 900;
}
 h2 {
   color: ${({ theme }) => theme.colors.heading};
   font-size: 4.4rem;
   font-weight: 300;
   white-space: normal;
  
  }
h3 {
  font-size: 1.8rem;
  font-weight: 400;
}
p, button {
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.65rem;
  line-height: 1.5;
  font-weight:400;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

.container{
    max-width: 120rem;
    margin: 0 auto;
}

.grid{
    display: grid;
    gap: 9rem;
}

.grid-two-columns{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.grid-three-columns{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-columns{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}
`;
