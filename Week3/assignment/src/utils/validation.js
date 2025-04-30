export function inputValid(input) {
  if (input.length !== 3) {
    return "⚠️ 숫자 3자리를 입력해주세요!";
  }

  if (!/^\d{3}$/.test(input)) {
    return "⚠️ 숫자만 입력해주세요!";
  }

  const digits = input.split("");
  if (new Set(digits).size !== digits.length) {
    return "⚠️ 중복되지 않은 숫자를 입력해주세요!";
  }

  return "";
}
