import styled from "styled-components";

const Container = styled.div`
`;

const IconLupaPesquisa = styled.img`
    height: 20px;
    width: 20px;
    position: absolute;
    left: 0;
    padding-left: 31px;
`;

const Header = styled.header`
    position: fixed;
    z-index: 10;
    background-color: #FFFFFF;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    width: 100%;
`;

const ContainerCardsPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 16px 0;
`;

const ContentPage = styled.div`
    padding-top: 104px;
    margin: 0 16px;
`;

export {
    Header,
    Container,
    ContentPage,
    ContainerCardsPokemon,
    IconLupaPesquisa,
};