import { useState } from "react";
import Input from "../Input";
import GameSection from "./GameSection";
import { inputValid } from "../../utils/validation";
import GithubSection from "./GithubSection";
import RecentUser from "../RecentUser";

export default function InputSection({ activeTab }) {
  const [tempInput, setTempInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const [isCardOpen, setIsCardOpen] = useState(false);
  const [recentUserIds, setRecentUserIds] = useState(() => {
    return JSON.parse(localStorage.getItem("recentUsers")) || [];
  });

  const handleInput = (e) => setTempInput(e.target.value);

  const closeCard = () => {
    setIsCardOpen(false);
  };

  const submitInput = (e) => {
    if (e.key === "Enter") {
      const errorMessage = inputValid(tempInput, activeTab);
      e.target.value = "";

      if (errorMessage) {
        setError(errorMessage);
        setResultMessage("");
        return;
      }
      setError("");
      setInputValue(tempInput);
      setTempInput("");

      if (activeTab === "github") {
        setIsCardOpen(true);

        const updated = [...recentUserIds];
        if (!updated.includes(tempInput)) {
          if (updated.length >= 3) updated.shift();
          updated.push(tempInput);
          setRecentUserIds(updated);
          localStorage.setItem("recentUsers", JSON.stringify(updated));
        }
      }
    }
  };

  const resetGame = () => {
    setInputValue("");
    setTempInput("");
    setResultMessage("");
  };

  const removeRecentUser = (userId) => {
    const updated = recentUserIds.filter((id) => id !== userId);
    setRecentUserIds(updated);
    localStorage.setItem("recentUsers", JSON.stringify(updated));
  };

  return (
    <>
      <Input
        activeTab={activeTab}
        value={tempInput}
        onChange={handleInput}
        onKeyDown={submitInput}
      />

      {activeTab === "game" && (
        <>
          {error && <p className="py-3 text-primary font-semibold">{error}</p>}
          {resultMessage && (
            <p className="py-3 text-primary text-lg font-bold">
              {resultMessage}
            </p>
          )}
          <GameSection
            inputNumber={inputValue}
            onResult={setResultMessage}
            resetGame={resetGame}
          />
        </>
      )}

      {activeTab === "github" && recentUserIds.length > 0 && (
        <>
          <p className="text-left font-bold py-3">최근 검색어</p>
          <div className="w-full pb-3 flex gap-1 justify-start flex-wrap">
            {recentUserIds.map((userId) => (
              <RecentUser
                key={userId}
                userId={userId}
                removeRecentUser={() => removeRecentUser(userId)}
              />
            ))}
          </div>
          <GithubSection
            userId={inputValue}
            isCardOpen={isCardOpen}
            closeCard={closeCard}
          />
        </>
      )}
    </>
  );
}
