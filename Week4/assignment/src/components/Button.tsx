import { css } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import theme, { ThemeType } from "@/styles/theme";

export default function Button() {
  return <button css={buttonStyle(theme)}>로그인</button>;
}

const buttonStyle = (theme: ThemeType) => css`
  ${commonStyle};
  background-color: ${theme.colors.gray2};
  border: none;
`;
