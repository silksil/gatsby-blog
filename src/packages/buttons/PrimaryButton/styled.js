import styled from "styled-components";
import BaseButton from "../BaseButton";

const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.secondary.main};
  color: ${({ theme }) => theme.secondary.contrast};

  background-image: linear-gradient(to right, #5504ae 0%, #192dee 100%);

  &:hover {
    background-color: ${({ theme }) => theme.secondary.light};
    background-position: right center;
  }

  &:active {
    background: ${({ theme }) => theme.secondary.dark};
  }
`;

export default PrimaryButton;
