import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import { useState } from "react";

const NICKNAME_PLACEHOLDER = "닉네임을 입력해주세요";

export default function NicknameForm({ onSubmit }: { onSubmit: () => void }) {
  const [nickname, setNickname] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = () => {
    localStorage.setItem("signupNickname", nickname);
    onSubmit();
  };

  return (
    <>
      <h3 css={labelStyle}>닉네임</h3>
      <Input
        name="nickname"
        placeholder={NICKNAME_PLACEHOLDER}
        onChange={handleInput}
      />
      <Button label="다음" onClick={handleSubmit} disabled={nickname === ""} />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
