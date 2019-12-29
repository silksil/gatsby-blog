import styled from "styled-components";
import { breakpoints } from "../../../../breakpoints";
import { Heading as BaseHeading } from "../../../../typography";

export const Wrapper = styled.div`
  width: 100%;
  padding: 16px 0px;

  ${breakpoints.md} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TextAndForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 400px;

  p {
    font-size: 16px;
    margin: 2px 0px;
  }

  ${breakpoints.md} {
    align-items: flex-start;
    min-width: 380px;
    max-width: 500px;
    text-align: left;
  }
  ${breakpoints.lg} {
    width: 100%;
  }
`;
export const Heading = styled(BaseHeading)`
  font-size: 24px;
  ${breakpoints.md} {
    font-size: 36px;
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

export const Screen = styled.div`
  width: 100%;
  margin-top: 16px;
  min-height: 50px;

  ${breakpoints.lg} {
    min-height: 100px;
  }
`;
