import React, { Fragment } from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const Tags = ({ tags }) => (
  <Fragment>
    {tags &&
      tags.map(tag => (
        <S.Tag as="span" color="primarySecondaryContrast">
          {tag}
        </S.Tag>
      ))}
  </Fragment>
);

Tags.propTypes = {};

export default Tags;
