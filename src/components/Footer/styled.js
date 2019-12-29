import styled from "styled-components";
import { breakpoints } from "../../packages/breakpoints";
import { IconButton as BaseIconButton } from "../../packages/buttons";
import { Heading as BaseHeading } from "../../packages/typography";

export const FooterContainer = styled.footer`
  padding: 48px 40px 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  ${breakpoints.md} {
    padding: 64px 0 72px;
    flex-direction: row;
  }

  ${breakpoints.lg} {
    padding: 80px 0 36px;
  }
`;

export const Heading = styled(BaseHeading)`
  margin-bottom: 8px;
  font-size: 24px;

  ${breakpoints.md} {
    font-size: 36px;
  }
`;

export const IconButton = styled(BaseIconButton)`
  margin-left: 32px;
  &:first-child {
    margin-left: 0px;
  }
  &:last-child {
    margin-right: 0px;
  }
`;

export const FormContainer = styled.div`
  margin-top: 24px;
`;
export const Content = styled.div`
  text-align: center;
`;

export const SocialWrapper = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: row;

  svg {
    height: 20px;
  }

  ${breakpoints.md} {
    margin-top: 24px;
  }
`;

export const Autograph = styled.div`
  margin-top: 62px;
  display: flex;
  justify-content: center;

  ${breakpoints.md} {
    justify-content: start;
  }
`;
