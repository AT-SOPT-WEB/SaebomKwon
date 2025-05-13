import { useEffect, useState } from "react";
import { css } from "@emotion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import theme, { ThemeType } from "@/styles/theme";
import routePath from "@/routes/routePath";
import { getMyNickname } from "@/apis/apiRequest";

export default function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const [myNickname, setMyNickname] = useState("");

  if (!path.includes("mypage")) return null;

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate(routePath.LOGIN);
  };

  useEffect(() => {
    const fetchNickname = async () => {
      try {
        const res = await getMyNickname();
        setMyNickname(res.data.nickname);
      } catch (err) {
        console.error("닉네임 불러오기 실패:", err);
      }
    };
    fetchNickname();
  }, [myNickname]);

  return (
    <header css={headerStyle(theme)}>
      <nav css={containerStyle}>
        <ul css={navbarStyle}>
          <li css={navItemStyle}>
            <Link css={linkStyle} to={routePath.MYPAGE_INFO}>
              내 정보
            </Link>
          </li>
          <li css={navItemStyle}>
            <Link css={linkStyle} to={routePath.MYPAGE_SEARCH}>
              SOPT 회원 조회하기
            </Link>
          </li>
          <li css={navItemStyle} onClick={handleLogout}>
            로그아웃
          </li>
        </ul>
        <span>{myNickname}</span>
      </nav>
    </header>
  );
}

const headerStyle = (theme: ThemeType) => css`
  background-color: ${theme.colors.primary};
  color: white;
  padding: 4rem 2rem;
`;

const containerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const navbarStyle = css`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

const navItemStyle = css`
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const linkStyle = css`
  text-decoration: none;
  color: inherit;
`;
