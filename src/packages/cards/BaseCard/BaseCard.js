import React from "react";
import { node } from "prop-types";
import Wrapper from "./styled";

const BaseCard = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

BaseCard.propTypes = {
  children: node.isRequired
};

export default BaseCard;
