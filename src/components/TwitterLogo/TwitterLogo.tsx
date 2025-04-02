import { FC } from "react";
import { Wrapper } from "./styled";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../../assets/twitterLogo.svg";
import React from "react";

const TwitterLogo: FC = () => (
  <Wrapper>
    <LazyLoadImage
      src={logo}
      effect="blur"
      alt="logo"
      width="100%"
      style={{ maxHeight: "100%" }}
    />
  </Wrapper>
);

export default TwitterLogo;
