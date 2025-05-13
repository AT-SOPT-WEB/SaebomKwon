export function getRandomNumber() {
  const randomNumbers = [];
  while (randomNumbers.length < 3) {
    const random = Math.floor(Math.random() * 10);
    if (!randomNumbers.includes(random)) {
      randomNumbers.push(random);
    }
  }
  console.log(randomNumbers);
  return randomNumbers;
}
