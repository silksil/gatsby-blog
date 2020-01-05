import React from "react";
import * as S from "./styled";
import { Link } from "gatsby";
import HighlightedArticle from "./HighlightedArticle";

const HighLightedArticles = ({ articles }) => {
  return (
    <S.Wrapper>
      <S.Title>Most Popular</S.Title>
      {articles &&
        articles.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, image }
            }
          }) => {
            return (
              <Link to={slug}>
                <HighlightedArticle title={title} image={image} />
              </Link>
            );
          }
        )}
    </S.Wrapper>
  );
};

HighLightedArticles.propTypes = {};

export default HighLightedArticles;
