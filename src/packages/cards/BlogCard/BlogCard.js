import React from "react";
import * as S from "./styled";
import { Text } from "../../typography";

const BlogCard = ({ title, subtitle, imageSrc, isFaded }) => {
  return (
    <S.Wrapper>
      <S.Img src={imageSrc} alt={`${title}`} />
      <S.Content isFaded={isFaded}>
        <S.Heading element="h3" color="white" bold isSmall={!subtitle}>
          {title}
        </S.Heading>
        <Text element="h3" color="white" bold={!subtitle}>
          {subtitle}
        </Text>
      </S.Content>
    </S.Wrapper>
  );
};

export default BlogCard;
