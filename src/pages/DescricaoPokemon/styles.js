import styled from "styled-components";

const ContentPage = styled.div``;

const ContainerTop = styled.div`
    position: absolute;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 270px;
    width: 100%;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background: ${({ $colorTipo }) => `linear-gradient(to bottom right, ${$colorTipo}, ${$colorTipo}80)`};
`;

const IconElementoPokemon = styled.img`
    height: 204px;
    width: 204px;
    filter: var(--color-filter-default) opacity(50%);
`;

const ContainerGifPokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    height: 300px;
`;

const GifPokemon = styled.img`
    image-rendering: pixelated;
    width: ${({ $width }) => $width}px;
    height: auto;
`;

export {
    ContentPage,
    IconElementoPokemon,
    ContainerTop,
    GifPokemon,
    ContainerGifPokemon,
}