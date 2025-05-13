import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import { useState } from "react";

const PW_PLACEHOLDER = "비밀번호를 입력해주세요";
const PW_CHECK_PLACEHOLDER = "비밀번호 확인";

export default function PwForm({ onNext }: { onNext: () => void }) {
  const [pw, setPw] = useState<string>("");
  const [pwCheck, setPwCheck] = useState<string>("");
  const isValid = pw !== "" && pwCheck !== "" && pw === pwCheck;

  const handlePwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const handlePwCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPwCheck(e.target.value);
  };

  const handleNext = () => {
    localStorage.setItem("signupPw", pw);
    onNext();
  };

  return (
    <>
      <h3 css={labelStyle}>비밀번호</h3>
      <Input
        name="pw"
        type="password"
        placeholder={PW_PLACEHOLDER}
        onChange={handlePwChange}
      />
      <Input
        name="pwCheck"
        type="password"
        placeholder={PW_CHECK_PLACEHOLDER}
        onChange={handlePwCheckChange}
      />
      <Button
        label="다음"
        onClick={handleNext}
        disabled={pw === "" || pwCheck === "" || !isValid}
      />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
