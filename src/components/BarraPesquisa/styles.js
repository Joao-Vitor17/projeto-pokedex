import styled from "styled-components";

const Input = styled.input`
    height: 48px;
    width: 100%;
    border-radius: 30px;
    border: 1.5px solid #CCCCCC;
    margin: 0 16px;
    padding-left: 44px;
    font-size: 14px;
    color: #666666;
    &::placeholder{
        color: #999999;
    };
    &:focus{
        border-color: #999999;
        outline: none;
    };
`;

export {
    Input
}