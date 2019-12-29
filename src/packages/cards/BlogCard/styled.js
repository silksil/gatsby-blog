import styled, { css } from "styled-components";
import { Heading as BaseHeading } from "../../typography";

export const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  background-color: ${({ theme }) => theme.primary.main};
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.02, 0.01, 0.47, 1);
  overflow: hidden;

  h2 {
    font-weight: 700;
  }

  &:hover {
    box-shadow: 0 40px 40px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
    transition-delay: 0s !important;
  }
`;

export const Img = styled.img`
  box-sizing: border-box;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const fadedContent = css`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;

export const Content = styled.div`
  position: absolute;
  bottom: 0px;
  text-align: left;
  left: 0px;
  padding: 16px;
  width: 100%;
  color: white;
  min-height: 80px;
  background: rgba(0, 0, 0, 0.7);
  ${({ isFaded }) => isFaded && fadedContent};
`;

const smallText = css`
  font-size: 20px;
`;

export const Heading = styled(BaseHeading)`
  font-size: ${({ isSmall }) => (isSmall ? "16px" : "28px")};
  margin-bottom: ${({ isSmall }) => (isSmall ? "16px" : "10px")};
`;
