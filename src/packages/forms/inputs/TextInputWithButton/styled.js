import styled, { css } from "styled-components";

import { breakpoints } from "../../../breakpoints";
import { Text } from "../../../typography";
import { BaseInputField, BaseInputGroup, GroupIsFocused } from "../styled";
import SubmitButton from "../../SubmitButton";

export const InputGroup = styled.div`
  ${BaseInputGroup};
  ${BaseInputField};

  border: ${({ theme }) => `1px solid ${theme.primary.contrastSecondary}`};
`;

export const InputField = styled.input`
  ${BaseInputField}
  border: none;
  background: transparent;
  width: 87%;
  height: 100%;
  &:focus {
    outline: 0;
  }
  ${breakpoints.md} {
    width: 90%;
  }
`;

export const InputGroupAddon = styled.div`
  position: absolute;
  right: 0%;
`;

export const Button = styled(SubmitButton)`
  border-radius: 0px;
  padding-right: 3vw;
  padding-left: 2vw;
  font-size: 14px;
  min-width: 100px;

  ${breakpoints.md} {
    padding-right: 16px;
    padding-left: 24px;
  }

  ${breakpoints.lg} {
    padding-right: 24px;
    padding-left: 16px;
    min-width: 140px;
    height: 54px;
    font-size: 16px;
  }
`;

export const StyledText = styled(Text)`
  padding-left: 16px;
  color: ${({ color }) => color};
  font-weight: ${({ bold }) => bold && "bold"}
  font-size: 14px;
  ${breakpoints.md} {
    font-size: 18px;
  }
`;
