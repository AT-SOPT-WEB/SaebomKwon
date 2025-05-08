import { useState } from "react";
import Input from "../Input";
import GithubSection from "../section/GithubSection";
import GameSection from "../section/GameSection";
import { inputValid } from "../../utils/validation";

export default function Main({ activeTab }) {
  const placeholder =
    activeTab === "github"
      ? "Github 프로필을 검색해보세요."
      : activeTab === "game"
      ? "3자리 숫자를 입력해주세요."
      : "깃허브 검색 or 숫자 야구 버튼을 클릭해주세요!";

  const [inputNumber, setInputNumber] = useState("");
  const [error, setError] = useState("");

  const handleInputNumber = (e) => {
    setInputNumber(e.target.value);
  };

  const submitInputNumber = (e) => {
    if (e.key === "Enter") {
      const errorMessage = inputValid(inputNumber);

      if (errorMessage) {
        setError(errorMessage);
        return;
      }

      setError("");
    }
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      {activeTab === "game" && (
        <>
          <Input
            placeholder={placeholder}
            value={inputNumber}
            onChange={handleInputNumber}
            onKeyDown={submitInputNumber}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </>
      )}

      {activeTab === "github" ? (
        <GithubSection />
      ) : (
        <GameSection inputNumber={inputNumber} />
      )}
    </main>
  );
}
