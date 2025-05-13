import { css } from "@emotion/react";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main css={mainStyle}>
        <Outlet />
      </main>
    </>
  );
}
const mainStyle = css`
  max-width: 600px;
  padding: 2rem;
  margin: auto;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
