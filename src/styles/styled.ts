import styled, { css } from "styled-components";

export const Input = styled.input`
  font-size: 18px;
  width: 100%;
  height: 100%;
  border: none;
`;

const InputWrapperStyles = css`
  display: flex;
  align-items: center;
  background: white;
  height: 50px;
  padding: 25px;
  border-radius: 6px;
  border: 1px solid #e4eaed;
  position: relative;
`;

export const InputWrapper = styled.div`
  ${InputWrapperStyles}
  margin-bottom: 25px;
  height: 70px;
`;

export const blueButton = css`
  cursor: pointer;
  width: 100%;
  background: #1da1f2;
  border: none;
  border-radius: 70px;
  color: white;
  height: 40px;
  font-size: 18px;

  &:hover {
    font-size: 25px;
  }
`;

export const Button = styled.button`
  ${blueButton}

  height: 50px;
  transition: 0.2s;
  &:hover {
    transform: scale(0.95);
  }
`;
