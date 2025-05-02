import { useState } from "react";
import Input from "../Input";
import GameSection from "./GameSection";
import { inputValid } from "../../utils/validation";
import GithubSection from "./GithubSection";

export default function InputSection({ activeTab }) {
  const [tempInput, setTempInput] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleInput = (e) => setTempInput(e.target.value);

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

      if (activeTab === "github") setIsCardOpen(true);
    }
  };

  const resetGame = () => {
    setInputValue("");
    setTempInput("");
    setResultMessage("");
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

      {activeTab === "github" && (
        <GithubSection
          userId={inputValue}
          isCardOpen={isCardOpen}
          closeCard={() => setIsCardOpen(false)}
        />
      )}
    </>
  );
}
