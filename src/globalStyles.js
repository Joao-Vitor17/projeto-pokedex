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

        --color-filter-water: invert(54%) sepia(60%) saturate(499%) hue-rotate(172deg) brightness(88%) contrast(89%);
        --color-filter-dragon: invert(54%) sepia(60%) saturate(499%) hue-rotate(172deg) brightness(88%) contrast(89%);
        --color-filter-electric: invert(75%) sepia(14%) saturate(2048%) hue-rotate(358deg) brightness(115%) contrast(91%);
        --color-filter-fairy: invert(64%) sepia(76%) saturate(457%) hue-rotate(278deg) brightness(108%) contrast(85%);
        --color-filter-ghost: invert(38%) sepia(16%) saturate(1862%) hue-rotate(187deg) brightness(100%) contrast(80%);
        --color-filter-fire: invert(80%) sepia(42%) saturate(3112%) hue-rotate(321deg) brightness(104%) contrast(102%);
        --color-filter-ice: invert(92%) sepia(16%) saturate(1036%) hue-rotate(103deg) brightness(87%) contrast(83%);
        --color-filter-grass: invert(59%) sepia(38%) saturate(568%) hue-rotate(67deg) brightness(101%) contrast(93%);
        --color-filter-bug: invert(72%) sepia(18%) saturate(1583%) hue-rotate(37deg) brightness(95%) contrast(86%);
        --color-filter-fighting: invert(47%) sepia(58%) saturate(5133%) hue-rotate(318deg) brightness(85%) contrast(87%);
        --color-filter-normal: invert(69%) sepia(9%) saturate(316%) hue-rotate(167deg) brightness(86%) contrast(89%);
        --color-filter-dark: invert(32%) sepia(6%) saturate(1363%) hue-rotate(220deg) brightness(94%) contrast(82%);
        --color-filter-steel: invert(51%) sepia(59%) saturate(274%) hue-rotate(151deg) brightness(91%) contrast(87%);
        --color-filter-rock: invert(75%) sepia(29%) saturate(309%) hue-rotate(8deg) brightness(92%) contrast(93%);
        --color-filter-psychic: invert(50%) sepia(68%) saturate(529%) hue-rotate(308deg) brightness(104%) contrast(96%);
        --color-filter-ground: invert(60%) sepia(91%) saturate(1123%) hue-rotate(329deg) brightness(89%) contrast(89%);
        --color-filter-poison: invert(48%) sepia(83%) saturate(449%) hue-rotate(239deg) brightness(89%) contrast(80%);
        --color-filter-flying: invert(63%) sepia(50%) saturate(311%) hue-rotate(179deg) brightness(96%) contrast(91%);
        
        --color-filter-default: invert(93%) sepia(0%) saturate(26%) hue-rotate(116deg) brightness(106%) contrast(106%);
    };

    body {
        background-color: #FFFFFF;
    };
`;

export default GlobalStyles;