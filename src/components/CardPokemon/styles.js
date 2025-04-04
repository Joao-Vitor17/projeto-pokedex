import styled from "styled-components";

const CardContainer = styled.div`
    height: 102px;
    width: 100%;
    background-color: ${({$colorCard }) => $colorCard};
    display: flex;
    justify-content: space-between;
    border-radius: 15px;
`;

const ContainerImgPokemon = styled.div`
    display: flex;
    background-color: var(--color-${({ $tipo }) => $tipo});
    width: 126px;
    border-radius: 15px;
    justify-content: center;
    align-items: center;
`;

const ImgPokemon = styled.img`
    image-rendering: pixelated;
    position: absolute;
    z-index: 1;
`;

const ImgElemento = styled.img`
    height: 94px;
    width: 94px;
    filter: var(--color-filter-default) opacity(50%);
`;

const InfosPokemon = styled.div`
    margin: 12px 10px 12px 16px;
`;

const NumeracaoPokemon = styled.p`
    font-size: 12px;
    font-weight: 600;
    color: #333333;
`;

const NomePokemon = styled.p`
    font-size: 21px;
    font-weight: 600;
    color: black;
`;

export {
    CardContainer,
    ContainerImgPokemon,
    ImgPokemon,
    ImgElemento,
    NumeracaoPokemon,
    NomePokemon,
    InfosPokemon,
};