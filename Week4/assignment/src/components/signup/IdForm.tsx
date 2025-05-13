import { css } from "@emotion/react";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const ID_PLACEHOLDER = "아이디를 입력해주세요";

export default function IdForm({ onNext }: { onNext: () => void }) {
  const [id, setId] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleNext = () => {
    localStorage.setItem("signupId", id);
    onNext();
  };

  return (
    <>
      <h3 css={labelStyle}>아이디</h3>
      <Input name="id" placeholder={ID_PLACEHOLDER} onChange={handleInput} />
      <Button label="다음" onClick={handleNext} disabled={id === ""} />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
