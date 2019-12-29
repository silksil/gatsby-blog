import styled, { css } from "styled-components";
import { breakpoints } from "../../breakpoints";
import { TYPES } from "./InputMessage";

export const OpenMessage = css`
  transition: ${({ animationDuration }) =>
    `all ${animationDuration}ms ease-in-out`};
  opacity: 1;
  max-height: 200px;
  padding-top: 9px;
`;

const InputMessage = styled.p`
  opacity: 0;
  margin: 0;
  transition: ${({ animationDuration }) =>
    `all ${animationDuration}ms ease-in-out`};
  max-height: 0px;
  ${({ open }) => open && OpenMessage}
  font-size: 14px;
  color: ${({ theme, variant }) =>
    variant === TYPES.error ? theme.error.main : theme.secondary.light};
  line-height: 1.56;

  ${breakpoints.lg} {
    font-size: 18px;
  }
`;

export default InputMessage;
