import { css } from "@emotion/react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import LinkItem from "@/components/LinkItem";

import routePath from "@/routes/routePath";

const ID_PLACEHOLDER = "아이디";
const PW_PLACEHOLDER = "비밀번호";

export default function LoginPage() {
  return (
    <>
      <h1 css={titleStyle}>로그인</h1>
      <div css={InputContainer}>
        <Input type="id" placeholder={ID_PLACEHOLDER} />
        <Input type="pw" placeholder={PW_PLACEHOLDER} />
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
