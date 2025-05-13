import { useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  console.log("현재 경로:", path);

  if (!path.includes("mypage")) return null;

  return <header>마이페이지용 헤더</header>;
}
