import { useState, useEffect } from "react";
import { getRandomNumber } from "../../utils/getRandomNumber";
import List from "../List";

export default function GameSection({ inputNumber, onResult, resetGame }) {
  const [answer, setAnswer] = useState([]);
  const [results, setResults] = useState([]);

  const resetTimer = (message, delay) => {
    onResult(message);
    setTimeout(() => {
      setAnswer(getRandomNumber());
      setResults([]);
      onResult("");
      resetGame();
    }, delay);
  };
  useEffect(() => {
    setAnswer(getRandomNumber());
  }, []);

  useEffect(() => {
    if (!inputNumber) return;
    const inputEachNumber = inputNumber.toString().split("");

    let strike = 0;
    let ball = 0;

    inputEachNumber.forEach((num, idx) => {
      const number = Number(num);

      if (number === answer[idx]) {
        strike++;
      } else if (answer.includes(number)) {
        ball++;
      }
    });

    const newResult = `${inputNumber} - ${strike}S ${ball}B`;
    setResults((prev) => [...prev, newResult]);

    if (strike === 3) {
      resetTimer("🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.", 3000);
    } else if (results.length + 1 >= 10) {
      resetTimer("게임에서 패배하셨습니다 😹", 5000);
    } else {
      onResult(`${strike} 스트라이크 ${ball} 볼`);
    }
  }, [inputNumber, answer]);

  return <List results={results} />;
}
