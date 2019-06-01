const theme = {};

theme.color = {
  black: "#000000",
  gray1: "#0C0F17",
  gray2: "#191D2E",
  gray3: "#272C3F",
  gray4: "#373B4D",
  gray5: "#464A5B",
  gray6: "#565968",
  gray7: "#656876",
  gray8: "#747784",
  gray9: "#848691",
  gray10: "#93969F",
  gray11: "#A3A5AD",
  gray12: "#B2B4BA",
  gray13: "#C1C3C8",
  gray14: "#D1D2D6",
  gray15: "#E0E1E4",
  gray16: "#F0F0F1",
  white: "#FFFFFF",
  blue: "#1F77B4",
  orange: "#FF7F0E",
  green: "#2CA02C",
  red: "#D62728",
  purple: "#9467BD",
  brown: "#8C564B",
  pink: "#E377C2",
  gray: "#848691",
  yellow: "#BCBD22",
  teal: "#17BECF"
};

theme.color.shades = {
  blue: ["#16537E", "#1A6599", theme.color.blue, "#418BBF", "#62A0CB"],
  red: ["#961B1C", "#B62122", theme.color.red, "#DC4748", "#E26868"]
};

theme.type = {
  fontSize: [
    "9px",
    "11px",
    "14px",
    "16px",
    "22px",
    "27px",
    "33px",
    "44px",
    "55px",
    "66px",
    "88px"
  ],
  lineHeight: [
    "12px",
    "16px",
    "18px",
    "22px",
    "26px",
    "32px",
    "36px",
    "46px",
    "56px",
    "66px",
    "88px"
  ],
  fontWeight: {
    extraLight: 200,
    light: 300,
    book: 400,
    medium: 500,
    bold: 700,
    black: 800
  }
};

export default theme;
