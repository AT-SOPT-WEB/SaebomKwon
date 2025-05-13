import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";

const ID_PLACEHOLDER = "아이디를 입력해주세요";

export default function IdForm({ onNext }: { onNext: () => void }) {
  return (
    <>
      <h3 css={labelStyle}>아이디</h3>
      <Input type="id" placeholder={ID_PLACEHOLDER} />
      <Button label="다음" onClick={onNext} />
    </>
  );
}

const labelStyle = css`
  padding: 0.5rem 0;
`;
