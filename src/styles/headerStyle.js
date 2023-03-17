import styled from "styled-components";

export const MainHeader = styled.header`
    background-color: rgb(33, 33, 33);
    display: flex;
    font-variant-caps: all-petite-caps;
    line-height: 3.32rem;
    box-shadow: rgb(200, 50, 50) 0px 2px 3px;
`;

export const LogoContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: left;
    margin-left: 1.72rem;
`;

export const LeftContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
`;

export const LogoLink = styled.a`
    text-decoration: none;
    font-size: 1.359rem;
    color: blanchedalmond;
`;

export const GithubLink = styled.a`
    text-decoration: none;
    margin-right: 1.2rem;
    color: blanchedalmond;
    font-size: 1.09rem;

    &::before {
        content: '{';
        margin-right: 2px;
        font-size: 1.1rem;
        color: burlywood;
    }

    &::after {
        content: '}';
        margin-left: 2px;
        font-size: 1.1rem;
        color: burlywood;
    }
`;

export const BySaNc = styled.span`
    font-size: 0.8em;
    margin-right: 1.4rem;
    font-variant-caps: normal;
`;