import { useState, useEffect } from "react";
import { getRandomNumber } from "../../utils/getRandomNumber";
import {
  GAME_SUCCESS_MESSAGE,
  GAME_FAIL_MESSAGE,
} from "../../constants/message";
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
      resetTimer(GAME_SUCCESS_MESSAGE, 3000);
    } else if (results.length + 1 >= 10) {
      resetTimer(GAME_FAIL_MESSAGE, 5000);
    } else {
      onResult(`${strike} 스트라이크 ${ball} 볼`);
    }
  }, [inputNumber, answer]);

  return <List results={results} />;
}
