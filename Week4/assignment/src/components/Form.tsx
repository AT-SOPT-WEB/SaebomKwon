import { css } from "@emotion/react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LinkItem from "@/components/LinkItem";

import routePath from "@/routes/routePath";

export default function Form({ title }: { title: string }) {
  return (
    <>
      <h1 css={titleStyle}>{title}</h1>
      <div css={InputContainer}>
        <Input type="id" />
        <Input type="pw" />
        <Button label="로그인"></Button>
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
