import React, { useMemo, useState } from "react";
import { FC } from "react";
import { Wrapper } from "../LogIn/styled";
import TwitterLogo from "@/components/TwitterLogo/TwitterLogo";
import {
  BirthDateHeader,
  Button,
  DaySelect,
  Form,
  MonthSelect,
  SelectBlock,
  Text,
  Title,
  YearSelect,
} from "./styled";
import { config, customStyles } from "./config";
import { Input, InputWrapper } from "@/styles/styled";
import { TextLink } from "../Root/styled";
import Select from "react-select";
import {
  getDaysOptionsArray,
  getMonthOptionsArray,
  getYearsOptionsArray,
} from "@/helpers/dateHelper";
import { IOption } from "./types";

const { header, placeholders, emailUse, dateOfBirth, text, buttonText } =
  config;
const {
  namePlaceholder,
  phonePlaceholder,
  emailPlaceholder,
  passwordPlaceholder,
} = placeholders;

const SignUp: FC = () => {
  const [currentMonth, setCurrentMonth] = useState<number>(0);
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  const daysOptionsArray = useMemo(
    () => getDaysOptionsArray(currentMonth, currentYear),
    [currentMonth, currentYear]
  );

  const yearsOptionsArray = useMemo(() => getYearsOptionsArray(), []);
  const monthsOptionsArray = useMemo(() => getMonthOptionsArray(), []);

  const changeCurrentMonth = (monthOption: unknown) => {
    if (monthOption) {
      setCurrentMonth(Number((monthOption as IOption).value));
    }
  };

  const changeCurrentYear = (yearOption: unknown) => {
    if (yearOption) {
      setCurrentYear(Number((yearOption as IOption).value));
    }
  };

  const changeCurrentDay = (dayOption: unknown) => {
    if (dayOption) {
    }
  };

  return (
    <Wrapper>
      <Form>
        <TwitterLogo />
        <Title>{header}</Title>
        <InputWrapper>
          <Input type="text" placeholder={namePlaceholder} />
        </InputWrapper>
        <InputWrapper>
          <Input type="text" placeholder={phonePlaceholder} />
        </InputWrapper>
        <InputWrapper>
          <Input type="email" placeholder={emailPlaceholder} />
        </InputWrapper>
        <InputWrapper>
          <Input type="password" placeholder={passwordPlaceholder} />
        </InputWrapper>
        {/* <InputWrapper>
          <Input type="password" placeholder={confirmPlaceholder} />
        </InputWrapper> */}
        <TextLink to="/">{emailUse}</TextLink>
        <BirthDateHeader>{dateOfBirth}</BirthDateHeader>
        <Text>{text}</Text>
        <SelectBlock>
          <MonthSelect>
            <Select
              styles={customStyles}
              options={monthsOptionsArray}
              maxMenuHeight={300}
              menuPlacement="top"
              onChange={changeCurrentMonth}
            />
          </MonthSelect>
          <DaySelect>
            <Select
              styles={customStyles}
              options={daysOptionsArray}
              maxMenuHeight={300}
              menuPlacement="top"
              onChange={changeCurrentDay}
            />
          </DaySelect>
          <YearSelect>
            <Select
              styles={customStyles}
              options={yearsOptionsArray}
              maxMenuHeight={300}
              menuPlacement="top"
              onChange={changeCurrentYear}
            />
          </YearSelect>
        </SelectBlock>
        <Button type="submit">{buttonText}</Button>
      </Form>
    </Wrapper>
  );
};

export default SignUp;
