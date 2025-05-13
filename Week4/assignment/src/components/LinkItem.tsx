import theme, { ThemeType } from "@/styles/theme";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
export default function LinkItem({
  to,
  children,
}: {
  to: string;
  children: string;
}) {
  return (
    <Link to={to} css={LinkStyle(theme)}>
      {children}
    </Link>
  );
}

const LinkStyle = (theme: ThemeType) => css`
  text-align: center;
  font-size: 1.4rem;
  color: ${theme.colors.primary};
`;
