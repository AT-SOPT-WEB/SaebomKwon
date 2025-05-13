import { css, useTheme } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import { ThemeType } from "@/styles/theme";

type InputType = {
  type: string;
  placeholder: string;
};

export default function Input({ type, placeholder }: InputType) {
  const theme = useTheme();
  return (
    <input css={InputStyle(theme)} type="text" placeholder={placeholder} />
  );
}

const InputStyle = (theme: ThemeType) => css`
  ${commonStyle};
  border: 1px solid ${theme.colors.gray1};
`;
