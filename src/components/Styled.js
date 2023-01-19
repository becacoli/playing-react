import styled from "styled-components";

export const BtnDefaultIcon = styled.button`

    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    transition: 0.4s;

    &:hover{
        background-color: #ccc;

    }

    .center{
        text-align: center;
        width: 100%
    }
`;

// para pegar as configurações gerais do botão de cima sem precisar ocupar muitas linhas
// ao invés de usar export const BtnDefault = styled.button``
// usaremos export const BtnDefault = styled(BtnDefaultIcon)
// dessa forma só iremos pegar o padrão do BtnDefaultIcon

export const BtnDefault = styled(BtnDefaultIcon)`
    background-color: #7d2aeB;
    color: #fff;
    display: inline;
    
    &:hover{
        background-color: #4e129c;
    }
    `;