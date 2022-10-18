import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
