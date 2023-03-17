import styled from "styled-components";

export const ElementContainer = styled.div`
    color: #f09;
`;

export const MaxValueSpan = styled.span`
    color: #f09;
`;

export const ErrorBoxContainer = styled.div`
    width: 33.3%;
    border: 1px solid rgb(200, 50, 50);
    margin: 2rem auto auto;
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 1px rgb(200, 50, 50);
`

export const ErrorBoxMessage = styled.span`
    color: #fff;
    font-weight: 500;
`;

export const ErrorBoxInfo = styled.span`
    color: #efa826;
    font-weight: 600;
`;

export const ErrorBoxWarning = styled.span`
    color: rgb(255, 88, 88); /*AA on accesibility, maybe aim for different color for AAA*/
    font-weight: 600;
`;