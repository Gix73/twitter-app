import React from "react";
import { FC } from "react";
import { Form, LinkWrapper, Title, Wrapper } from "./styled";
import { Input, InputWrapper, Button } from "../../styles/styled";
import { config } from "./config";
import TwitterLogo from "@/components/TwitterLogo/TwitterLogo";
import { TextLink } from "../Root/styled";

const { emailPlaceholder, passwordPlaceholder, signUp, header } = config;

const LogIn: FC = () => {
  return (
    <Wrapper>
      <Form>
        <TwitterLogo />
        <Title>{header}</Title>
        <InputWrapper>
          <Input type="email" placeholder={emailPlaceholder} />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder={passwordPlaceholder} />
        </InputWrapper>
        <Button>Log in</Button>
        <LinkWrapper>
          <TextLink to="#">{signUp}</TextLink>
        </LinkWrapper>
      </Form>
    </Wrapper>
  );
};

export default LogIn;
