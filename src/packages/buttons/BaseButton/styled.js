import { css } from "styled-components";

export const BaseButtonStyling = css`
  cursor: pointer;
  border: none;
  appearance: none;
  outline: none;
  border: 1px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 100%;
  border-radius: 20px;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  svg {
    width: 24px;
    height: 24px;
    margin: 0 10px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }

  &:disabled,
  &[disabled] {
    color: ${({ theme }) => theme.primary.contrast};
    background-color: ${({ theme }) => theme.primary.dark};
    border-color: ${({ theme }) => theme.primary.dark};
    cursor: initial;

    &:hover {
      background-color: ${({ theme }) => theme.primary.dark};
    }
  }
`;

/* size variants */
export const s = css`
  font-size: 14px;
  height: 32px;

  background: transparent;
  font-weight: 600;
`;

export const l = css`
  height: 48px;

  font-size: 20px;
  font-weight: 600;
`;
