import styled from "styled-components";
import BaseButton from "../BaseButton";

const SecondaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.tertiary.main};
  color: ${({ theme }) => theme.tertiary.contrast};

  &:hover {
    background-color: ${({ theme }) => theme.tertiary.light};
  }

  &:active {
    background: ${({ theme }) => theme.tertiary.dark};
  }
`;

export default SecondaryButton;
