import React from "react";
import { BySaNc, GithubLink, LeftContainer, LogoContainer, LogoLink, MainHeader } from "../styles/headerStyle";

export default function Header() {
    return (
        <MainHeader>
            <LogoContainer>
                <LogoLink href="#" rel="nofollow">EvolveSneak</LogoLink>
            </LogoContainer>
            <LeftContainer>
                <GithubLink href="https://github.com/adachi91/EvolveSneak">Github</GithubLink>
                <BySaNc>Made by Adachi</BySaNc>
            </LeftContainer>
        </MainHeader>
    );
};