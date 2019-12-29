import styled from "styled-components";

const BackgroundNewsletter = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.primary.light};
  display: flex;
  justify-content: center;
`;

export default BackgroundNewsletter;
