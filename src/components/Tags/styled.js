import styled from "styled-components";
import { Text } from "../../packages/typography";

const Tag = styled.span`
  text-transform: uppercase;
  background: ${({ theme }) => theme.tertiary.main};
  color: ${({ theme }) => theme.secondary.contrast};
  border-radius: 4px;
  padding: 0px 2px;
  margin-left: 8px;
  &:first-child {
    margin-left: 0px;
  }
`;

export default Tag;
