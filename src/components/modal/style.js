import styled from "styled-components";
import theme from "../../utils/theme";

const StyledTile = styled.div([], props => {
  const css = {
    background: theme.color.gray4,
    borderTop: `1px solid ${theme.color.gray1}`,
    borderRight: `1px solid ${theme.color.gray1}`,
    borderBottom: `1px solid ${theme.color.gray1}`,
    borderLeft: `1px solid ${theme.color.gray1}`,
    padding: "16px"
  };

  if (props.light) {
    css.background = theme.color.gray4;
    css.borderTop = `1px solid ${theme.color.gray2}`;
  }

  if (props.tabbed) {
    css.background = "none";
    css.borderTop = "none";
    css.borderRight = "none";
    css.borderBottom = "none";
    css.borderLeft = "none";
  }

  if (props.noPadding || props.tabbed) {
    css.padding = 0;
  }

  if (props.tinyPadding) {
    css.padding = "8px";
  }

  if (props.smallPadding) {
    css.padding = "12px";
  }

  if (props.largePadding) {
    css.padding = "24px";
  }

  return `
      padding: ${css.padding};
      background: ${css.background};
      border-top: ${css.borderTop};
      border-right: ${css.borderRight};
      border-bottom: ${css.borderBottom};
      border-left: ${css.borderLeft};
    `;
});

const StyledModal = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const StyledModalBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledModalForeground = styled.div`
  position: absolute;
  width: ${props => props.width};
  top: 128px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.75);
`;

const StyledModalHeader = styled.div`
  background: ${theme.color.gray4};
  /* border-top: 1px solid ${theme.color.gray3};
  border-right: 1px solid black; */
  border-bottom: 1px solid ${theme.color.gray3};
  /* border-left: 1px solid ${theme.color.gray3}; */
  display: table;
  width: 100%;
`;

const StyledModalHeaderText = styled.div`
  color: white;
  font-weight: bold;
  font-size: ${theme.type.fontSize[3]};
  line-height: ${theme.type.lineHeight[3]};
  display: table-cell;
  width: 100%;
  padding: 10px 16px 6px 16px;
  vertical-align: middle;
`;

const StyledModalCloseButton = styled.div`
  display: table-cell;
  width: 48px;
  color: ${theme.color.gray5};
  font-weight: normal;
  font-size: ${theme.type.fontSize[5]};
  font-family: ${theme.type.fontFamily};
  line-height: 1;
  background: none;
  border: none;
  top: 6px;
  right: 10px;
  font-weight: 200;
  text-align: right;
  vertical-align: top;
  padding: 6px 16px 10px 16px;
  pointer: default;

  &::selection {
    background: none;
  }

  &::-moz-selection {
    background: none;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    color: ${theme.color.gray8};
  }

  &:active {
    color: ${theme.color.gray11};
  }

  &:focus {
    outline: none;
  }
`;

const StyledModalContent = styled(StyledTile)`
  border-top: 1px solid ${theme.color.gray3};
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  border-left: 1px solid ${theme.color.gray3};
`;

const StyledModalFooter = styled.div`
  display: table;
  width: 100%;
  table-layout: fixed;
  position: relative;
`;

const StyledModalButton = styled.div([], props => {
  const css = {};

  switch (props.variant) {
    case "primary":
      css.color = theme.color.white;
      break;
    case "success":
      css.color = theme.color.green;
      break;
    case "danger":
      css.color = theme.color.red;
      break;
    case "warning":
      css.color = theme.color.orange;
      break;
    default:
      css.color = theme.color.gray11;
  }

  return `
    display: table-cell;
    vertical-align: top;
    background: ${theme.color.gray4};
    border-top: 1px solid ${theme.color.gray3};
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    border-left: 1px solid ${theme.color.gray3};
    padding: 16px;
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.type.fontSize[1]};
    line-height: ${theme.type.lineHeight[1]};
    font-weight: 700;
    color: ${css.color};
    letter-spacing: 2px;
    cursor: default;

    &::selection {
      background: none;
    }

    &::-moz-selection {
      background: none;
    }

    -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
        -moz-user-select: none;
          -ms-user-select: none;
              user-select: none;

    &:hover {
      background: ${theme.color.gray3};
      border-top-color: ${theme.color.gray4};
      border-left-color: ${theme.color.gray4};
    }

    &:active {
      padding: 17px 16px 15px 16px;
      background: ${theme.color.gray3};
      border-top-color: ${theme.color.gray3};
      border-left-color: ${theme.color.gray3};
    }
  `;
});

export {
  StyledModal,
  StyledModalBackground,
  StyledModalForeground,
  StyledModalHeader,
  StyledModalHeaderText,
  StyledModalCloseButton,
  StyledModalContent,
  StyledModalFooter,
  StyledModalButton
};
