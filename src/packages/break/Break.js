import React from "react";

import styled from "styled-components";

const StyledBreak = styled.div`
  border: none;
  width: 100%;
  border-top: ${({ theme }) => `1px solid ${theme.primary.light}`};
`;

const Break = ({ ...props }) => <StyledBreak {...props} />;

export default Break;
