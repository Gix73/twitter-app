import { blueButton } from "@/styles/styled";
import styled from "styled-components";

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  max-width: 680px;
  width: 100%;
`;

export const BirthDateHeader = styled.h2`
  font-size: 18px;
  margin-top: 17px;
`;

export const Text = styled.p`
  opacity: 0.7;
  line-height: 24px;
  margin: 32px 0px;
  font-size: 16px;
`;

export const SelectBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  width: 100%;
`;

export const MonthSelect = styled.div`
  max-width: 350px;
  width: 100%;
`;

export const DaySelect = styled.div`
  max-width: 150px;
  width: 100%;
`;

export const YearSelect = styled.div`
  max-width: 150px;
  width: 100%;
`;

export const Button = styled.button`
  ${blueButton}

  font-size: 18px;
  height: 50px;
  transition: 0.2s;
  &:hover {
    transform: scale(0.95);
  }
`;
