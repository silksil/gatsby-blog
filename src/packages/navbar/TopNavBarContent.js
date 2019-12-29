import React from "react";
import PropTypes from "prop-types";
import * as S from "./styled";

const TopNavBarContent = ({ childrenLeft, childrenRight }) => (
  <S.ContentWrapper>
    <S.Left>{childrenLeft}</S.Left>
    <S.Right>{childrenRight}</S.Right>
  </S.ContentWrapper>
);

TopNavBarContent.defaultProps = {
  childrenLeft: null,
  childrenRight: null
};

TopNavBarContent.propTypes = {
  childrenLeft: PropTypes.node,
  childrenRight: PropTypes.node
};

export default TopNavBarContent;
