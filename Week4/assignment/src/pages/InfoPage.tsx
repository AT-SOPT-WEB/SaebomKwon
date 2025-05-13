import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import { useState } from "react";
import { getMyNickname, modifyNickname } from "@/apis/apiRequest";

const NICKNAME_PLACEHOLDER = "새 닉네임을 입력하세요";

export default function InfoPage() {
  const [nickname, setNickname] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      await modifyNickname(nickname);
      setNickname("");
      alert(`${nickname}님 환영합니당`);
    } catch (err) {
      alert((err as any).response?.data?.message || "에러 발생");
    }
  };
  return (
    <>
      <h1 css={titleStyle}>내 정보 수정하기</h1>
      <div css={formContainer}>
        <h3 css={labelStyle}>새 닉네임</h3>
        <Input
          name="id"
          placeholder={NICKNAME_PLACEHOLDER}
          onChange={handleInput}
        />
        <Button
          label="저장"
          onClick={handleSubmit}
          disabled={nickname === ""}
        />
      </div>
    </>
  );
}

const titleStyle = css`
  text-align: center;
  padding: 2rem;
`;

const labelStyle = css`
  padding: 0.5rem 0;
`;

const formContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
