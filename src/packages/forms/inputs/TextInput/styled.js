import styled from "styled-components";
import {
  GroupIsFocused,
  GroupIsHovered,
  BaseInputField,
  BaseInputGroup
} from "../styled";

export const InputGroup = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  ${BaseInputGroup};
  ${BaseInputField};
  &:hover,
  &:active {
  }

  &:focus {
    ${GroupIsFocused}
  }
`;

export const InputGroupAddon = styled.div`
  margin-left: -40px;
  z-index: 2;
  svg {
    width: 25px;
    height: 25px;
  }
`;
