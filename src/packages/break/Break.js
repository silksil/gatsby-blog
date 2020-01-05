import React from "react";

import styled from "styled-components";

const StyledBreak = styled.hr`
  border: none;
  border-top: ${({ theme }) => `1px solid ${theme.primary.light}`};
`;

const Break = () => <StyledBreak />;

export default Break;
