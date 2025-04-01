import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        list-style-type: none;
        font-family: "Poppins", sans-serif;
    };

    :root {
        --color-water: #5090D6;
        --color-dragon: #0B6DC3;
        --color-electric: #F4D23C;
        --color-fairy: #EC8FE6;
        --color-ghost: #5269AD;
        --color-fire: #FF9D55;
        --color-ice: #73CEC0;
        --color-grass: #63BC5A;
        --color-bug: #91C12F;
        --color-fighting: #CE416B;
        --color-normal: #919AA2;
        --color-dark: #5A5465;
        --color-steel: #5A8EA2;
        --color-rock: #C5B78C;
        --color-psychic: #FA7179;
        --color-ground: #D97845;
        --color-poison: #B567CE;
        --color-flying: #89AAE3;
    };

    body {
        background-color: #FFFFFF;
    };
`;

export default GlobalStyles;