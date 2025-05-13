import { css } from "@emotion/react";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Form() {
  return (
    <div css={InputContainer}>
      <Input type="id" />
      <Input type="pw" />
      <Button />
    </div>
  );
}

const InputContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
("#e5e3e3");
