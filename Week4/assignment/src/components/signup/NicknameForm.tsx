import { useNavigate } from "react-router-dom";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import routePath from "@/routes/routePath";

const PLACEHOLDER = "닉네임을 입력해주세요";

export default function NicknameForm() {
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(routePath.MYPAGE_INFO);
  };

  return (
    <>
      <h3 css={labelStyle}>닉네임</h3>
      <Input type="id" placeholder={PLACEHOLDER} />
      <Button label="회원가입" onClick={handleSubmit} />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
