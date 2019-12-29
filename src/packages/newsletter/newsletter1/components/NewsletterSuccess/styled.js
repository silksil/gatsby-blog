import styled from "styled-components";
import { Text } from "../../../../typography";

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.success.main};
`;

export default StyledText;
