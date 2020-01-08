import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Heading, Text } from "@packages/typography";
import * as S from "./styled";
import formatDate from "@utils/formatDate";

const RelatedArticles = ({ articles }) => {
  return (
    <Fragment>
      <Heading
        font="primary"
        color="primaryContrastDark"
        size="l"
        element="h2"
        bold
        font="secondary"
      >
        Related Articles
      </Heading>
      {articles &&
        articles.map(
          ({
            node: {
              fields: { slug },
              frontmatter: { title, image, highlight, date }
            }
          }) => {
            const isPopular = highlight.includes("Popular");
            const isNew = highlight.includes("New");
            const formattedDate = formatDate(date);

            return (
              <Link to={slug} key={title}>
                <S.ArticleItem>
                  {image ? <S.Img fixed={image} /> : <div />}
                  <S.TitleAndDate>
                    <Heading
                      color="primaryContrastDark"
                      size=""
                      element="h3"
                      bold={false}
                      font="primary"
                    >
                      {title}
                    </Heading>
                    <Text color="primaryContrastLight">{formattedDate}</Text>
                  </S.TitleAndDate>
                  {isNew && <S.Alert type="new">New!</S.Alert>}
                  {isPopular && <S.Alert type="popular">Popular!</S.Alert>}
                </S.ArticleItem>
              </Link>
            );
          }
        )}
    </Fragment>
  );
};

export default RelatedArticles;
