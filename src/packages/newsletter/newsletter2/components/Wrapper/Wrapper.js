import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../typography";
import NewsletterIcon from "../../../../icons/UI/Newsletter";
import * as S from "./styled";

const Wrapper = ({ title, description, children }) => (
  <S.Wrapper>
    <S.TextAndForm>
      <S.Heading bold element="h4">
        {title}
      </S.Heading>
      <Text as="p" color="primaryContrastSecondary">
        {description}
      </Text>
      <S.Screen>{children}</S.Screen>
    </S.TextAndForm>
    <S.Header>
      <S.Center>
        <NewsletterIcon />
      </S.Center>
    </S.Header>
  </S.Wrapper>
);

Wrapper.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Wrapper;
