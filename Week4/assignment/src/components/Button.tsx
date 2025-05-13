import { css } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import theme, { ThemeType } from "@/styles/theme";

type ButtonType = {
  label: string;
  onClick?: () => void;
  disabled: boolean;
};
export default function Button({ label, onClick, disabled }: ButtonType) {
  return (
    <button
      css={disabled ? defaultStyle(theme) : activeStyle(theme)}
      onClick={onClick}
      disabled={disabled}
    >
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

const activeStyle = (theme: ThemeType) => css`
  ${commonStyle};
  background-color: ${theme.colors.primary};
  border: none;
  color: white;
`;
