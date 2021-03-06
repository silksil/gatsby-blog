import React from "react";
import PropTypes from "prop-types";
import { Text } from "../../../../typography";
import NewsletterIcon from "../../../../icons/UI/Newsletter";
import * as S from "./styled";

const Wrapper = ({ title, description, children }) => (
  <S.Wrapper>
    <span class="css-11mded4 e1bmus8l1">
      <svg
        width="44"
        height="36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        focusable="false"
      >
        <path
          d="M31 8c0-1.4-1.4-2.4-2.8-2.4a2.7 2.7 0 01-2.8-2.8C25.1 1.4 24.4 0 23 0s-2.4 1.4-2.4 2.8c0 1.7-1.4 2.8-2.8 2.8S15 6.6 15 8s1.4 2.4 2.8 2.4c1.7 0 2.8 1.4 2.8 2.8s1 2.8 2.4 2.8 2.4-1.4 2.4-2.8a3 3 0 012.8-2.8c1.4-.3 2.8-1 2.8-2.4z"
          fill="#FFDF37"
        ></path>
        <path
          d="M8 32c0-.7-.7-1.2-1.4-1.2-.9 0-1.4-.7-1.4-1.4C5 28.7 4.7 28 4 28s-1.2.7-1.2 1.4c0 .9-.7 1.4-1.4 1.4S0 31.3 0 32s.7 1.2 1.4 1.2c.9 0 1.4.7 1.4 1.4S3.3 36 4 36s1.2-.7 1.2-1.4.7-1.4 1.4-1.4C7.3 33 8 32.7 8 32z"
          fill="#73FFF7"
        ></path>
        <path
          d="M44 20c0-.3-.3-.6-.7-.6a.7.7 0 01-.7-.7c0-.4-.3-.7-.6-.7s-.6.3-.6.7c0 .4-.4.7-.7.7-.4 0-.7.3-.7.6s.3.6.7.6c.4 0 .7.4.7.7 0 .4.3.7.6.7s.6-.3.6-.7c0-.3.4-.7.7-.7.4 0 .7-.3.7-.6z"
          fill="#BC027F"
        ></path>
      </svg>
    </span>
    <S.TextAndForm>
      <S.Heading bold element="h4">
        {title}
      </S.Heading>
      <Text as="p" color="primaryContrast">
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
