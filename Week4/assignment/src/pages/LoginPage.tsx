import { css } from "@emotion/react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LinkItem from "@/components/LinkItem";

import routePath from "@/routes/routePath";
import { useState } from "react";

import { login } from "@/apis/apiRequest";
import { useNavigate } from "react-router-dom";

const ID_PLACEHOLDER = "아이디";
const PW_PLACEHOLDER = "비밀번호";

export default function LoginPage() {
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "id") setId(value);
    if (name === "pw") setPw(value);
  };

  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await login({ loginId: id, password: pw });
      localStorage.setItem("accessToken", res.data.userId);
      navigate(routePath.MYPAGE_INFO);
    } catch (err) {
      console.error("로그인 실패:", err);
    }
  };
  return (
    <>
      <h1 css={titleStyle}>로그인</h1>
      <div css={InputContainer}>
        <Input name="id" placeholder={ID_PLACEHOLDER} onChange={handleInput} />
        <Input
          name="pw"
          type="password"
          placeholder={PW_PLACEHOLDER}
          onChange={handleInput}
        />
        <Button
          label="로그인"
          onClick={handleSubmit}
          disabled={id === "" || pw === ""}
        ></Button>
        <LinkItem to={routePath.SIGNUP}>회원가입</LinkItem>
      </div>
    </>
  );
}
const InputContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const titleStyle = css`
  text-align: center;
  padding: 2rem;
`;
