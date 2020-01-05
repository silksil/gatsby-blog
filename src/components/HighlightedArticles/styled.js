import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary.contrastSecondary};
  background: ${({ theme }) => theme.primary.dark};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  padding: 8px 0px;
`;

export const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
`;

export const ArticleImage = styled.img`
  border-radius: 10px;
  width: 50%;
`;

export const ArticleTitle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`;
