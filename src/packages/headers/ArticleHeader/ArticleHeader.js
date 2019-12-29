import React from "react";
import PropTypes from "prop-types";
import { Subtitle, Text } from "../../typography";
import { Grid, GridItem } from "../../grids";
import * as S from "./styled";

const Header = ({ title, subtitle, image, tags, date, ...props }) => (
  <S.HeaderWrapper {...props}>
    <Grid>
      <GridItem
        columnStartSm="1"
        columnEndSm="14"
        columnStartMd="1"
        columnEndMd="14"
        columnStartLg="3"
        columnEndLg="11"
      >
        <S.Heading element="h1" color="primaryContrast" bold>
          {title}
        </S.Heading>
        <S.TextAndDate>
          <S.Author as="span" color="primaryContrastSecondary">
            Jan Kuitenbrouwer{" "}
          </S.Author>
          <Text as="span" color="primaryContrastSecondary">
            25 oktober 2019, 13:54
          </Text>
        </S.TextAndDate>
        <S.Tags>
          {tags &&
            tags.map(tag => (
              <S.Tag as="span" color="primaryContrastSecondary">
                {tag}
              </S.Tag>
            ))}
        </S.Tags>
      </GridItem>
      <GridItem fullWidthSm fullWidthMd columnStartLg="1" columnEndLg="14">
        <S.HeaderImg srcSet={` ${image}`} src={image} alt={`${title}`} />
      </GridItem>
      <GridItem
        columnStartSm="1"
        columnEndSm="14"
        columnStartMd="1"
        columnEndMd="14"
        columnStartLg="4"
        columnEndLg="10"
      >
        {subtitle && (
          <Subtitle element="h2" color="primaryContrastSecondary">
            {subtitle}
          </Subtitle>
        )}
      </GridItem>
    </Grid>
  </S.HeaderWrapper>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  image: PropTypes.string
};

Header.defaultProps = {
  title: null,
  subtitle: null,
  image: null
};

export default Header;
