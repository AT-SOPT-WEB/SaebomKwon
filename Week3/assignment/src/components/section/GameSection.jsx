import { useState, useEffect } from "react";
import List from "../List";

export default function GameSection({ inputNumber }) {
  const [answer, setAnswer] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    const getRandomNumber = () => {
      const randomNumbers = [];

      while (randomNumbers.length < 3) {
        const random = Math.floor(Math.random * 10);
        if (!randomNumbers.includes(random)) {
          randomNumbers.push(random);
        }
      }
      return randomNumbers;
    };

    setAnswer(getRandomNumber());
  }, []);

  useEffect(() => {
    if (inputNumber.length !== 3) return;

    const inputEachNumber = inputNumber.toString().split("");

    let strike = 0;
    let ball = 0;

    inputEachNumber.forEach((number, idx) => {
      if (number === answer[idx]) {
        strike++;
      } else if (answer.includes(number)) {
        ball++;
      }
    });

    setResult(`${inputNumber} - ${strike}S ${ball}B`);
  }, [inputNumber, answer]);

  return <List result={result} />;
}
