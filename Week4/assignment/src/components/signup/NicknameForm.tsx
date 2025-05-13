import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import routePath from "@/routes/routePath";
import { useState } from "react";

const PLACEHOLDER = "닉네임을 입력해주세요";

export default function NicknameForm() {
  const [nickname, setNickname] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(routePath.MYPAGE_INFO);
  };

  return (
    <>
      <h3 css={labelStyle}>닉네임</h3>
      <Input type="id" placeholder={PLACEHOLDER} onChange={handleInput} />
      <Button label="다음" onClick={handleSubmit} disabled={nickname === ""} />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
