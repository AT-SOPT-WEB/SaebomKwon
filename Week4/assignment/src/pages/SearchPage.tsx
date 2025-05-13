import Input from "@/components/Input";
import Button from "@/components/Button";
import { css } from "@emotion/react";
import { useState } from "react";
import { getNickname } from "@/apis/apiRequest";

const NICKNAME_PLACEHOLDER = "검색할 닉네임을 입력하세요";

export default function SearchPage() {
  const [nickname, setNickname] = useState<string>("");
  const [results, setResults] = useState<any>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await getNickname();
      const matchedUsers = res.data.nicknameList
        .filter((item: string) => item.includes(nickname))
        .slice(0, 10);

      setResults(matchedUsers);
    } catch (err) {
      alert("조회 중 오류가 발생했습니다.");
    }
  };
  return (
    <>
      <h1 css={titleStyle}>SOPT 회원 조회하기</h1>
      <div css={formContainer}>
        <h3 css={labelStyle}>닉네임</h3>
        <Input
          name="id"
          placeholder={NICKNAME_PLACEHOLDER}
          onChange={handleInput}
        />
        <Button
          label="확인"
          onClick={handleSubmit}
          disabled={nickname === ""}
        />
      </div>
      {Array.isArray(results) && (
        <ul css={resultListStyle}>
          {results.length === 0 ? (
            <li>해당 닉네임을 가진 사용자가 없습니다.</li>
          ) : (
            results.map((item, index) => <li key={index}>{item}</li>)
          )}
        </ul>
      )}
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

const resultListStyle = css`
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  list-style: none;
`;
