import styled from "styled-components";
import { breakpoints } from "../../../../breakpoints";

const Wrapper = styled.div`
  text-align: left;

  button {
    box-sizing: border-box;
    width: 100%;
  }

  ${breakpoints.md} {
    max-width: 320px;
    display: flex;
    flex-direction: column;

    > div {
      margin: 4px auto;
    }

    button {
      padding: 0;
    }
  }
`;

export default Wrapper;
