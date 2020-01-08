import styled, { css } from "styled-components";
import BaseImg from "../image";

export const ArticleItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr 70px;
  margin: 0;
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 16px;
  background-color: ${({ theme }) => theme.primary.main};
  box-shadow: rgba(46, 41, 51, 0.08) 0px 1px 2px,
    rgba(71, 63, 79, 0.08) 0px 2px 4px;

  &:hover {
    background-color: ${({ theme }) => theme.primary.light};
  }

  margin-top: 24px;
`;

export const TitleAndDate = styled.span`
  margin-left: 16px;
`;

export const Alert = styled.span`
  padding: 16px;
  display: inline-block;
  align-self: center;
  justify-self: flex-end;
  margin-left: 1rem;
  border-radius: 10px;
  padding: 0.5rem 0.75rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bold;
  width: 72px;
  ${({ type }) => (type === "new" ? New : Popular)}
`;

export const New = css`
  background-color: ${({ theme }) => theme.secondary.light};
  color: ${({ theme }) => theme.secondary.dark};
`;

export const Popular = css`
  background-color: ${({ theme }) => theme.success.light};
  color: ${({ theme }) => theme.success.main};
`;

export const Img = styled(BaseImg)`
  box-shadow: ${({ theme }) => `${theme.secondary.main} 0px 1px 2px,
    ${theme.secondary.main} 0px 2px 4px`};
  border-radius: 100%;
`;
