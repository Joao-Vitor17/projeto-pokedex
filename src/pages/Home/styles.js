import styled from "styled-components";

const Container = styled.div`
`;

const Header = styled.header`
    position: fixed;
    background-color: #FFFFFF;
    border-bottom: 1px solid #F2F2F2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 88px;
    width: 100%;
`;

const Info = styled.div`
    padding-top: 104px;
    margin: 0 16px;
`;

export {
    Header,
    Container,
    Info
};