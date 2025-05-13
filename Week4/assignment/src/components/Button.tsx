import { css } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import theme, { ThemeType } from "@/styles/theme";

type ButtonType = {
  label: string;
  onClick?: () => void;
};
export default function Button({ label, onClick }: ButtonType) {
  return (
    <button css={defaultStyle(theme)} onClick={onClick}>
      {label}
    </button>
  );
}

const defaultStyle = (theme: ThemeType) => css`
  ${commonStyle};
  background-color: ${theme.colors.gray2};
  border: none;
  color: white;
`;
