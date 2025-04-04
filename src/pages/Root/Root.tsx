import React from "react";
import { FC } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import banner from "../../assets/backTwitter.webp";
import logo from "../../assets/twitterLogo.svg";
import googleIcon from "../../assets/googleIcon.svg";

import { config } from "./config";

import {
  BannerWrapper,
  Container,
  EmailButton,
  Footer,
  GoogleButton,
  GoogleButtonImg,
  SubHeader,
  Main,
  MainHeader,
  MiniLogo,
  RootWrapper,
  AgreeRule,
  TextLink,
  HaveAccount,
  FooterNav,
  NavItem,
  FooterLink,
  NavList,
  Signature,
} from "./styled";
import { NavLink } from "react-router-dom";

const {
  footerLinks,
  company,
  mainHeader,
  subHeader,
  googleSignUp,
  emailSignUp,
  agreeText,
  agreeLinks,
  haveAccountText,
  haveAccountLink,
} = config;

const Root: FC = () => {
  return (
    <RootWrapper>
      <Container>
        <BannerWrapper>
          <LazyLoadImage
            src={banner}
            effect="blur"
            alt="banner"
            width="100%"
            style={{ maxHeight: "100%" }}
          />
        </BannerWrapper>
        <Main>
          <MiniLogo src={logo} />
          <MainHeader>{mainHeader}</MainHeader>
          <SubHeader>{subHeader}</SubHeader>
          <GoogleButton>
            <GoogleButtonImg alt="google icon" src={googleIcon} />
            {googleSignUp}
          </GoogleButton>
          <EmailButton to="/SignUp">{emailSignUp}</EmailButton>
          <AgreeRule>
            {agreeText[0]}
            <TextLink to={agreeLinks[0].path}>{agreeLinks[0].name}</TextLink>
            {agreeText[1]}
            <TextLink to={agreeLinks[1].path}>{agreeLinks[1].name}</TextLink>
            {agreeText[2]}
            <TextLink to={agreeLinks[2].path}>{agreeLinks[2].name}</TextLink>
            {agreeText[3]}
          </AgreeRule>
          <HaveAccount>
            {haveAccountText}
            <TextLink to="logIn">{haveAccountLink}</TextLink>
          </HaveAccount>
        </Main>
      </Container>
      <Footer>
        <FooterNav>
          <NavList>
            {footerLinks.map(({ name, path }) => (
              <NavItem key={name}>
                <FooterLink to={path}>{name}</FooterLink>
              </NavItem>
            ))}
            <NavItem>
              <Signature>{company}</Signature>
            </NavItem>
          </NavList>
        </FooterNav>
      </Footer>
    </RootWrapper>
  );
};

export default Root;
