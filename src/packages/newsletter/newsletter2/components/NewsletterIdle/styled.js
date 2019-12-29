import styled from "styled-components";
import { breakpoints } from "../../../../breakpoints";

const Wrapper = styled.div`
  width: 100%;

  ${breakpoints.md} {
    max-width: 400px;
    display: flex;
    flex-direction: column;
  }
`;

export default Wrapper;
