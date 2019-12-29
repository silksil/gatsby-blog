import styled from "styled-components";
import { breakpoints } from "../breakpoints";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.gridCols ? props.gridCols : "1fr ".repeat(12).trim()};
  grid-template-rows: auto;
  grid-gap: ${props => (props.gridGapSm ? props.gridGapSm : "24px")};
  justify-content: center;
  height: 100%;
  max-width: ${({ fullWidth }) => (fullWidth ? null : "1360px")};
  margin: 0 ${({ fullWidth }) => (fullWidth ? null : "16px")};
  position: relative;

  ${breakpoints.md} {
    grid-gap: ${props => (props.gridGapMd ? props.gridGapMd : "40px")};
    margin: 0 ${({ fullWidth }) => (fullWidth ? null : "40px")};
  }

  ${breakpoints.lg} {
    grid-gap: ${props => (props.gridGapLg ? props.gridGapLg : "40px")};
    margin: 0 ${({ fullWidth }) => (fullWidth ? null : "40px")};
  }

  ${breakpoints.xl} {
    grid-gap: ${props => (props.gridGapXl ? props.gridGapXl : "40px")};
    margin: 0 ${({ fullWidth }) => (fullWidth ? null : "auto")};
  }
`;

// the fullWidth${size} properties allows you to have the GridItem at full width without having the Grid at fullWidth
// not compatible with XL yet
export const GridItem = styled.div`
  grid-column-start: ${({ columnStartSm, fullWidthSm }) =>
    fullWidthSm ? "1" : columnStartSm};
  grid-column-end: ${({ columnEndSm, fullWidthSm }) =>
    fullWidthSm ? "14" : columnEndSm};
  grid-row-start: ${props => props.rowStartSm};
  grid-row-end: ${props => props.rowEndSm};
  display: ${props => (props.centered ? "flex" : "block")};
  justify-content: ${props => (props.centered ? "center" : "")};
  margin: 0;
  width: ${({ fullWidthSm }) => (fullWidthSm ? "auto" : "100%")};
  margin: ${({ fullWidthSm }) => (fullWidthSm ? " 0 -16px" : "0")};
  ${breakpoints.md} {
    grid-column-start: ${({ columnStartMd, fullWidthMd }) =>
      fullWidthMd ? "1" : columnStartMd};
    grid-column-end: ${({ columnEndMd, fullWidthMd }) =>
      fullWidthMd ? "14" : columnEndMd};
    grid-row-start: ${props => props.rowStartMd};
    grid-row-end: ${props => props.rowEndMd};
    width: ${({ fullWidthMd }) => (fullWidthMd ? "auto" : "100%")};
    margin: ${({ fullWidthMd }) => (fullWidthMd ? " 0 -40px" : "0")};
  }

  ${breakpoints.lg} {
    grid-column-start: ${({ columnStartLg, fullWidthLg }) =>
      fullWidthLg ? "1" : columnStartLg};
    grid-column-end: ${({ columnEndLg, fullWidthLg }) =>
      fullWidthLg ? "14" : columnEndLg};
    grid-row-start: ${props => props.rowStartLg};
    grid-row-end: ${props => props.rowEndLg};

    width: ${({ fullWidthLg }) => (fullWidthLg ? "auto" : "100%")};
    margin: ${({ fullWidthLg }) => (fullWidthLg ? " 0 -40px" : "0")};
  }

  ${breakpoints.xl} {
    grid-column-start: ${({ columnStartXl, fullWidthXl }) =>
      fullWidthXl ? "1" : columnStartXl};
    grid-column-end: ${({ columnEndXl, fullWidthXl }) =>
      fullWidthXl ? "14" : columnEndXl};
    grid-column-start: ${props => props.columnStartXl};
    grid-column-end: ${props => props.columnEndXl};
    grid-row-start: ${props => props.rowStartXl};
    grid-row-end: ${props => props.rowEndXl};
    /* width: ${({ fullWidthXl }) => (fullWidthXl ? "auto" : "100%")}; */
  }
`;

export const GridSpacer = styled.div`
  grid-column-end: span 12;
  height: ${props => (props.heightSm ? props.heightSm : "40px")};

  ${breakpoints.md} {
    height: ${props => (props.heightMd ? props.heightMd : "56px")};
  }

  ${breakpoints.lg} {
    height: ${props => (props.heightLg ? props.heightLg : "56px")};
  }
`;
