import React from "react";
import PropTypes from "prop-types";
import { Heading, Text } from "../../typography";
import * as S from "./styled";
import { Grid, GridItem } from "../../grids";

const Header = ({ title, subtitle, color, ...props }) => (
  <S.Wrapper {...props}>
    <S.HeaderContent>
      <Heading color="primaryContrastDark" as="h1">
        {title}
      </Heading>
      {subtitle && (
        <Text
          color="primaryContrast"
          as="h2"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        ></Text>
      )}
    </S.HeaderContent>
    <img
      src={
        "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      }
    />
  </S.Wrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
};

Header.defaultProps = {
  title: null,
  subtitle: null
};

export default Header;
