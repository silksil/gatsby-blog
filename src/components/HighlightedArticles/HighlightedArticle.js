import React from "react";
import { string } from "prop-types";
import * as S from "./styled";

const HighlightedArticle = ({ title, image }) => {
  return (
    <S.ArticleWrapper>
      <S.ArticleImage src={image} />
      <S.ArticleTitle>
        <p>{title}</p>
      </S.ArticleTitle>
    </S.ArticleWrapper>
  );
};

HighlightedArticle.propTypes = {
  title: string,
  image: string
};

export default HighlightedArticle;
