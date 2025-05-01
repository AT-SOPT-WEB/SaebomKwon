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

  const [tempInput, setTempInput] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [error, setError] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleInputNumber = (e) => {
    setTempInput(e.target.value);
  };

  const submitInputNumber = (e) => {
    if (e.key === "Enter") {
      const errorMessage = inputValid(tempInput);

      if (errorMessage) {
        setError(errorMessage);
        setResultMessage("");
        return;
      }

      setError("");
      setInputNumber(tempInput);
      e.target.value = "";
    }
  };

  const resetGame = () => {
    setInputNumber("");
    setTempInput("");
    setResultMessage("");
  };

  return (
    <main className="h-screen flex flex-col justify-center items-center gap-4">
      <Input
        placeholder={placeholder}
        value={inputNumber}
        onChange={handleInputNumber}
        onKeyDown={submitInputNumber}
      />
      {activeTab === "game" && error && (
        <p className="py-3 text-primary font-semibold">{error}</p>
      )}
      {activeTab === "game" && resultMessage && (
        <p className="py-3 text-primary text-lg font-bold">{resultMessage}</p>
      )}
      {activeTab === "github" ? (
        <GithubSection />
      ) : activeTab === "game" ? (
        <GameSection
          inputNumber={inputNumber}
          onResult={setResultMessage}
          resetGame={resetGame}
        />
      ) : null}
    </main>
  );
}
