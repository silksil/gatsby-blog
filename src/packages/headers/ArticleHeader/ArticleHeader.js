import React from "react";
import PropTypes from "prop-types";
import { Text, Heading } from "../../typography";
import { Grid, GridItem } from "../../grids";
import * as S from "./styled";

const Header = ({
  title,
  subtitle,
  image,
  tags,
  date,
  author,
  timeToRead,
  ...props
}) => (
  <S.HeaderWrapper {...props}>
    <Grid>
      <GridItem
        columnStartSm="1"
        columnEndSm="14"
        columnStartMd="1"
        columnEndMd="14"
        columnStartLg="4"
        columnEndLg="10"
      >
        <Heading bold element="h1" size="xxl" color="primaryContrastDark">
          {title}
        </Heading>
        {subtitle && (
          <Heading
            font="primary"
            lighter
            element="h2"
            color="primaryContrast"
            style={{ marginTop: "16px" }}
          >
            {subtitle}
          </Heading>
        )}
        <div style={{ marginTop: "16px" }}>
          {timeToRead && (
            <Text
              as="span"
              color="primaryContrastLight"
              style={{ marginRight: "4px" }}
            >
              {timeToRead} minutes read
            </Text>
          )}
          <Text as="span" bold color="secondaryLight">
            ·{" "}
          </Text>
          <Text lighter as="span" color="primaryContrastLight">
            {date}
          </Text>
        </div>
        <S.Tags style={{ marginBottom: "16px" }}>
          {tags &&
            tags.map(tag => (
              <S.Tag as="span" color="primaryContrastLight">
                {tag}
              </S.Tag>
            ))}
        </S.Tags>
      </GridItem>
      <GridItem fullWidthSm fullWidthMd columnStartLg="4" columnEndLg="10">
        <S.HeaderImg srcSet={` ${image}`} src={image} alt={`${title}`} />
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
