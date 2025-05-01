import { useState, useEffect } from "react";
import List from "../List";

export default function GameSection({ inputNumber, onResult, resetGame }) {
  const [answer, setAnswer] = useState([]);
  const [results, setResults] = useState([]);

  const getRandomNumber = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 3) {
      const random = Math.floor(Math.random() * 10);
      if (!randomNumbers.includes(random)) {
        randomNumbers.push(random);
      }
    }
    console.log(randomNumbers);
    return randomNumbers;
  };

  useEffect(() => {
    setAnswer(getRandomNumber());
  }, []);

  useEffect(() => {
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
      onResult("🎉 정답입니다! 3초 뒤에 게임이 리셋됩니다.");

      setTimeout(() => {
        setAnswer(getRandomNumber());
        setResults([]);
        onResult("");

        resetGame();
      }, 3000);
    } else {
      onResult(`${strike} 스크라이크 ${ball} 볼`);
    }
  }, [inputNumber, answer]);

  return <List results={results} />;
}
