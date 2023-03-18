import styled from "styled-components";

/* Game Elements */
export const ElementContainer = styled.div`
    display: inline-flex;
    margin-right: 1.05rem;
    margin-bottom: 1.7rem;
    min-width: 307px; /* Find a better way to make the fields more uniform */

    &::before {
        content: attr(data-tip);
        color: blanchedalmond;
        padding: 6px;
        line-height: 16px;
        height: 20px;
        top: 3.99rem;
        opacity: 0;
        transition: opacity 0.4s ease-out 0s;
        font-weight: bold;
        position: absolute;
        z-index: 999;
        white-space: nowrap;
        background: rgb(150, 50, 50);
        margin: auto -0.6rem;
        font-size: 0.88rem;
    }

    &:hover::before {
        opacity: 1;
    }
`;

export const ElementContainerRestraint = styled.div`
    width: 80%;
    margin:3rem auto auto;
`;

export const ElementNameLabel = styled.label`
    display: inline-flex;
    flex-direction: column;
    color: blanchedalmond;
    margin-top: -2px;
`;

export const ElementNumberBox = styled.input`
    background: transparent;
    box-shadow: rgb(200, 50, 50) 0px 0px 2px 2px;
    color: blanchedalmond;
    border: medium none;
    padding: 0px 0px 2px 4px;
    margin-left: 0.4rem;
`;


/* Errorbox */
export const ErrorBoxContainer = styled.div`
    width: 33.3%;
    border: 1px solid rgb(200, 50, 50);
    margin: 2rem auto auto;
    min-height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px 1px rgb(200, 50, 50);
`;

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