import styled from "styled-components";
import { breakpoints } from "@packages/breakpoints";
import { PageHeader } from "@packages/headers";

const StyledPageHeader = styled(PageHeader)`
  ${breakpoints.md} {
  }
`;

export default StyledPageHeader;
