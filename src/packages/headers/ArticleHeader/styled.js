import styled from "styled-components";
import { breakpoints } from "../../breakpoints";
import { Text, Heading as BaseHeading } from "../../typography";

export const HeaderWrapper = styled.div`
  text-align: center;
`;

export const HeaderImg = styled.img`
  background-position: center center;
  min-height: 100px;
  object-fit: cover;
  background-size: cover;
  width: 100%;
  max-height: 800px;
`;

export const TextAndDate = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Author = styled(Text)`
  margin-right: 4px;
  font-weight: bold;
  color: ${({ theme }) => theme.primary.contrastSecondary};
`;

export const Heading = styled(BaseHeading)`
  font-size: 28px;
  ${breakpoints.md} {
    font-size: 48px;
  }
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
