import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

export const RootWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
`;

export const Container = styled.div`
  display: flex;
`;

export const BannerWrapper = styled.div`
  max-width: 1121px;
  width: 100%;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  padding-left: 40px;
  justify-content: center;
`;

export const MiniLogo = styled.img`
  width: 50px;
  height: 41px;
`;

export const MainHeader = styled.h1`
  font-size: 84px;
  font-weight: 900;
`;

export const SubHeader = styled.h2`
  font-size: 42px;
  font-weight: 900;
  margin-top: 46px;
`;

export const Button = css`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 50px;
  border: 2px solid rgb(228, 234, 237);
  background: transparent;
  transition: 0.2s;
  color: black;
  width: 320px;
  height: 50px;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    transform: scale(1.05);
    border: 2px solid grey;
  }
`;

export const GoogleButton = styled.button`
  ${Button}
  margin-top: 45px;
`;

export const GoogleButtonImg = styled.img`
  width: 25px;
  height: 25px;
`;

export const EmailButton = styled.button`
  ${Button}
  margin-top: 21px;
`;

export const textLink = css`
  color: #1e97e1;
  &:hover {
    text-decoration: underline;
  }
`;

export const TextLink = styled(NavLink)`
  ${textLink};
`;

export const AgreeRule = styled.p`
  margin-top: 31px;
  max-width: 375px;
  width: 100%;
  font-size: 14px;
  line-height: 25px;
`;

export const HaveAccount = styled.p`
  margin-top: 21px;
  font-size: 14px;
  line-height: 25px;
`;

export const Footer = styled.footer`
  display: flex;
  width: 100%;
  height: 55px;
  margin-top: auto;
`;

export const FooterNav = styled.nav`
  display: flex;
  width: 100%;
`;

export const NavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 19px;
`;
export const NavItem = styled.li`
  font-size: 14px;
`;

export const FooterLink = styled(NavLink)`
  font-size: 14px;
  color: black;
  transition: 0.2s;
  &:hover {
    color: blue;
  }
`;
