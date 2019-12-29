import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../typography";
import NewsletterIcon from "../../../../icons/UI/Newsletter";
import * as S from "./styled";

const Wrapper = ({ title, description, children }) => (
  <S.StyledWrapper>
    <S.Header>
      <S.Center>
        <NewsletterIcon />
      </S.Center>
    </S.Header>
    <S.ContentWrapper>
      <S.Heading element="h2" variant="six">
        {title}
      </S.Heading>
      <Text as="p">{description}</Text>
      {children}
    </S.ContentWrapper>
  </S.StyledWrapper>
);

Wrapper.propTypes = {
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Wrapper;
