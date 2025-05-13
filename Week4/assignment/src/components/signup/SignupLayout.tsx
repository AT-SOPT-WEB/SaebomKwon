import { css } from "@emotion/react";
import LinkItem from "@/components/LinkItem";
import routePath from "@/routes/routePath";

type LayoutType = {
  title: string;
  children: React.ReactNode;
};

export default function SignupLayout({ title, children }: LayoutType) {
  return (
    <>
      <h1 css={titleStyle}>{title}</h1>
      <div css={formContainer}>{children}</div>
      <p css={textStyle}>
        이미 회원이신가요?
        <LinkItem to={routePath.LOGIN}>로그인</LinkItem>
      </p>
    </>
  );
}

const titleStyle = css`
  text-align: center;
  padding: 2rem;
`;

const formContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const textStyle = css`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  font-size: 1.4rem;
`;
