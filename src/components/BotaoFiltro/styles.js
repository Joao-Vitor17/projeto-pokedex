import styled from "styled-components";

const BotaoBase = styled.button`
    display: flex;
    background-color: #333333;
    color: #FFFFFF;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    border-radius: 49px;
    border: none;
    width: 100%;
    height: 42px;
    gap: 8px;
`;

const Container = styled.div`
    display: flex;
    gap: 16px;
`;

const BotaoTipo = styled(BotaoBase)``;
const BotaoNumero = styled(BotaoBase)``;

export{
    BotaoTipo,
    BotaoNumero,
    Container
};