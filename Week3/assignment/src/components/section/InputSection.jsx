import { useState } from "react";
import Input from "../Input";
import GameSection from "./GameSection";
import { inputValid } from "../../utils/validation";

export default function InputSection({ activeTab, children }) {
  const [tempInput, setTempInput] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [error, setError] = useState("");
  const [resultMessage, setResultMessage] = useState("");

  const handleInputNumber = (e) => setTempInput(e.target.value);

  const submitInputNumber = (e) => {
    if (e.key === "Enter") {
      const errorMessage = inputValid(tempInput);
      e.target.value = "";

      if (errorMessage) {
        setError(errorMessage);
        setResultMessage("");
        return;
      }
      setError("");
      setInputNumber(tempInput);
      setTempInput("");
    }
  };

  const resetGame = () => {
    setInputNumber("");
    setTempInput("");
    setResultMessage("");
  };

  return (
    <>
      <Input
        activeTab={activeTab}
        value={tempInput}
        onChange={handleInputNumber}
        onKeyDown={submitInputNumber}
      />
      {activeTab === "game" && error && (
        <p className="py-3 text-primary font-semibold">{error}</p>
      )}
      {activeTab === "game" && resultMessage && (
        <p className="py-3 text-primary text-lg font-bold">{resultMessage}</p>
      )}
      {activeTab === "game" ? (
        <GameSection
          inputNumber={inputNumber}
          onResult={setResultMessage}
          resetGame={resetGame}
        />
      ) : (
        children
      )}
    </>
  );
}
