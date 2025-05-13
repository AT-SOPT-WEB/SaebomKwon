import { css } from "@emotion/react";
import { commonStyle } from "@/styles/common";
import theme, { ThemeType } from "@/styles/theme";

export default function Input({ type }: { type: string }) {
  const placeholder = type === "id" ? "아이디" : "비밀번호";
  return (
    <input css={InputStyle(theme)} type="text" placeholder={placeholder} />
  );
}

const InputStyle = (theme: ThemeType) => css`
  ${commonStyle};
  border: 1px solid ${theme.colors.gray1};
`;
