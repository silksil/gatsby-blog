import { css } from "styled-components";
import { breakpoints } from "../../breakpoints";

export const GroupIsFocused = css`
  border-bottom-color: ${({ hasError, theme }) =>
    hasError ? theme.error.main : theme.primary.contrast};
  outline: none;
  border: ${({ theme }) => `2px solid ${theme.tertiary.main}`};
`;

export const BaseInputGroup = css`
  box-shadow: none;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  height: 48px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary.main};
  padding: 3px 0;
  overflow: hidden;
  ${breakpoints.lg} {
    height: 56px;
    :invalid {
      box-shadow: none;
    }
  }
`;

export const BaseInputField = css`
  border: ${({ theme }) => `1px solid ${theme.primary.contrastSecondary}`};
  color: ${({ theme }) => theme.primary.contrast};
  font-size: 14px;
  text-indent: 14px;
  padding: 3px;
  ::placeholder {
    color: ${({ theme }) => theme.primary.contrastSecondary};

    &:focus {
      color: ${({ theme }) => theme.contrastTertiary};
    }
  }
  ${breakpoints.lg} {
    font-size: 16px;
  }
`;
