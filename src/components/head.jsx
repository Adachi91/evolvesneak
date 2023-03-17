import React from "react";
import { BySaNc, GithubLink, LeftContainer, LogoContainer, LogoLink, MainHeader } from "../styles/headerStyle";

//most of your sites are malformed <nav> belongs outside of <Header>, I just learned this.
const Header = () => {
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
//<a className={leftLinksaStyle} href="https://github.com/adachi91/EvolveSneak">Github</a> 

export default Header;