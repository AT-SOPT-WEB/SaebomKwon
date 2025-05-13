import { useTheme, css } from "@emotion/react";
import { ThemeType } from "@/styles/theme";
import { Link } from "react-router-dom";

type LinkItemType = {
  to: string;
  children: React.ReactNode;
};

export default function LinkItem({ to, children }: LinkItemType) {
  const theme = useTheme() as ThemeType;
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
