import styled from "styled-components";
import theme from "../../utils/theme";

const StyledButton = styled.button([], props => {
  const css = {
    padding: "8px 12px",
    activePadding: "9px 12px 7px 12px",
    fontSize: theme.type.fontSize[1],
    lineHeight: theme.type.lineHeight[1],
    letterSpacing: "2px",
    colors: [
      theme.color.gray6,
      theme.color.gray7,
      theme.color.gray8,
      theme.color.gray9,
      theme.color.gray10
    ]
  };

  if (props.tiny) {
    css.padding = "2px 6px";
    css.activePadding = "3px 6px 1px 6px";
    css.fontSize = theme.type.fontSize[0];
    css.lineHeight = theme.type.lineHeight[0];
    css.letterSpacing = "1px";
  }

  if (props.small) {
    css.padding = "6px 10px";
    css.activePadding = "7px 10px 5px 10px";
    css.fontSize = theme.type.fontSize[0];
    css.lineHeight = theme.type.lineHeight[0];
    css.letterSpacing = "1px";
  }

  if (props.medium) {
    css.padding = "8px 12px";
    css.activePadding = "9px 12px 7px 12px";
    css.fontSize = theme.type.fontSize[1];
    css.lineHeight = theme.type.lineHeight[1];
    css.letterSpacing = "2px";
  }

  if (props.large) {
    css.padding = "10px 16px";
    css.activePadding = "11px 16px 9px 16px";
    css.fontSize = theme.type.fontSize[2];
    css.lineHeight = theme.type.lineHeight[2];
    css.letterSpacing = "3px";
  }

  if (props.primary) {
    css.colors = theme.color.shades.blue;
  }

  if (props.danger) {
    css.colors = theme.color.shades.red;
  }

  return `
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    text-transform: uppercase;
    font-weight: bold;
    color: ${theme.color.white};
    padding: ${css.padding};
    font-size: ${css.fontSize};
    line-height: ${css.lineHeight};
    letter-spacing: ${css.letterSpacing};
    background: ${css.colors[2]};
    border: 1px solid ${css.colors[3]};
    border-right-color: ${css.colors[1]};
    border-bottom-color: ${css.colors[1]};

    &:focus {
      outline: none;
    }

    &:hover {
      background: ${css.colors[1]};
      border-color: ${css.colors[2]};
      border-right-color: ${css.colors[0]};
      border-bottom-color: ${css.colors[0]};
    }

    &:active {
      padding: ${css.activePadding};
      background: ${css.colors[1]};
      border-color: ${css.colors[1]};
    }
  `;
});

export default StyledButton;
