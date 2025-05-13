import { css } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import theme, { ThemeType } from "@/styles/theme";

export default function Button({ label }: { label: string }) {
  return <button css={buttonStyle(theme)}>{label}</button>;
}

const buttonStyle = (theme: ThemeType) => css`
  ${commonStyle};
  background-color: ${theme.colors.gray2};
  border: none;
`;
