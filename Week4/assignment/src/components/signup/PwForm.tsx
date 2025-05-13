import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";

const PW_PLACEHOLDER = "비밀번호를 입력해주세요";
const PW_CHECK_PLACEHOLDER = "비밀번호 확인";

export default function PwForm({ onNext }: { onNext: () => void }) {
  return (
    <>
      <h3 css={labelStyle}>비밀번호</h3>
      <Input type="pw" placeholder={PW_PLACEHOLDER} />
      <Input type="pwCheck" placeholder={PW_CHECK_PLACEHOLDER} />
      <Button label="다음" onClick={onNext} />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
