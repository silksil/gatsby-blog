import styled from "styled-components";
import { breakpoints } from "../../breakpoints";
import { Text, Heading as BaseHeading } from "../../typography";

export const HeaderWrapper = styled.div``;

export const HeaderImg = styled.img`
  background-position: center center;
  min-height: 100px;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  max-height: 400px;
  margin-top: -40px;
`;

export const Tags = styled.div`
  margin-top: 16px;
  ${breakpoints.md} {
    margin-top: 24px;
  }
`;
export const Tag = styled(Text)`
  text-transform: uppercase;
  font-size: 10px;
  background-color: ${({ theme }) => theme.secondary.main};
  color: ${({ theme }) => theme.secondary.contrast};
  border-radius: 4px;
  margin-left: 8px;
  padding: 5px;
  &:first-child {
    margin-left: 0px;
  }
`;
