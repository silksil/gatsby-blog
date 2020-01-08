import styled from "styled-components";
import { Text } from "@packages/typography";
import { breakpoints } from "@packages/breakpoints";

export const Tags = styled.div`
  margin-top: 16px;

  ${breakpoints.md} {
    margin-top: 24px;
  }
`;
export const Tag = styled(Text)`
  font-size: 12px;
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.secondary.main};
  border-radius: 4px;
  margin-left: 8px;
  padding: 5px;

  &:first-child {
    margin-left: 0px;
  }
`;
