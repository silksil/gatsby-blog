import styled, { css } from "styled-components";

export const ArticleItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 50px 1fr 70px;
  margin: 0;
  border: 2px solid transparent;
  border-bottom: ${({ theme }) => `solid 1px ${theme.primary.light}`};
  padding: 16px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.primary.light};
  }
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
