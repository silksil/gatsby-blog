import styled from "styled-components";
import { breakpoints } from "@packages/breakpoints";
import { PageHeader } from "@packages/headers";

const StyledPageHeader = styled(PageHeader)`
  height: 70vh;
  ${breakpoints.md} {
    height: 70vh;
  }
`;

export default StyledPageHeader;
