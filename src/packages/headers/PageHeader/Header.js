import React from "react";
import PropTypes from "prop-types";
import { Heading } from "../../typography";
import * as S from "./styled";
import { Grid, GridItem } from "../../grids";

const Header = ({ title, subtitle, color, ...props }) => (
  <S.Wrapper {...props}>
    <Grid>
      <GridItem
        columnStartSm="1"
        columnEndSm="span 12"
        columnStartMd="1"
        columnEndMd="span 10"
        columnStartLg="1"
        columnEndLg="8"
      >
        <S.HeaderContent>
          <Heading color="primaryContrast" as="h1">
            {title}
          </Heading>
          {subtitle && (
            <Heading color="primaryContrastSecondary" as="h2">
              {subtitle}
            </Heading>
          )}
        </S.HeaderContent>
      </GridItem>
    </Grid>
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
