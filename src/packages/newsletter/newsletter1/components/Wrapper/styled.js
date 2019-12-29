import styled from "styled-components";
import { breakpoints } from "../../../../breakpoints";
import { Heading as BaseHeading } from "../../../../typography";

export const StyledWrapper = styled.div`
  width: 100%;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.5);
  padding: 0px 24px 24px 24px;
  ${breakpoints.md} {
    padding: 24px;
    display: flex;
    flex-direction: row;
  }
`;

export const Heading = styled(BaseHeading)`
  text-transform: initial;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  box-sizing: border-box;

  p {
    font-size: 16px;
    margin: 2px 0px;
  }

  ${breakpoints.md} {
    max-width: 400px;
    text-align: left;
    width: 100%;
  }
  ${breakpoints.lg} {
    width: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  height: 64px;
  width: 100%;
  svg {
    padding-top: 8px;
  }

  ${breakpoints.md} {
    height: auto;
    width: 240px;
    svg {
      padding-top: 0px;
    }
  }
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
`;
