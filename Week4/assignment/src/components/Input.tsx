import { css, useTheme } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import { ThemeType } from "@/styles/theme";

type InputType = {
  type: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type, placeholder, onChange }: InputType) {
  const theme = useTheme();
  return (
    <input
      css={InputStyle(theme)}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

const InputStyle = (theme: ThemeType) => css`
  ${commonStyle};
  border: 1px solid ${theme.colors.gray1};
`;
