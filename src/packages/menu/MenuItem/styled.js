import styled from "styled-components";
import PropTypes from "prop-types";

const StyledMenuItem = styled.li`
  display: flex;
  flex-shrink: 0;

  a,
  span {
    text-transform: uppercase;
    border-bottom: 4px solid
      ${({ isActive, theme }) =>
        isActive ? theme.secondary.main : "transparent"};
    color: ${({ isActive, theme }) =>
      isActive ? theme.primary.contrast : theme.primary.contrastSecondary};
    font-weight: bold;
    padding: 19px 0 16px;
    text-align: center;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.primary.contrast};
    }
  }
`;

StyledMenuItem.propTypes = {
  isActive: PropTypes.bool
};

StyledMenuItem.defaultProps = {
  isActive: false
};

export default StyledMenuItem;
