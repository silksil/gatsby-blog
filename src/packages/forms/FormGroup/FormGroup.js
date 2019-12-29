import React from "react";
import { node } from "prop-types";
import styled from "styled-components";

const StyledFormGroup = styled.div`
  width: 100%;
`;

const FormGroup = ({ children }) => (
  <StyledFormGroup className="form-group">{children}</StyledFormGroup>
);

FormGroup.propTypes = {
  children: node
};

FormGroup.defaultProps = {
  children: null
};

export default FormGroup;
