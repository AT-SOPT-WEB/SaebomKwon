import {
  ERROR_INPUT_LENGTH,
  ERROR_INPUT_NUMERIC,
  ERROR_INPUT_DUPLICATE,
} from "../constants/message";

export function inputValid(input) {
  if (input.length !== 3) {
    return ERROR_INPUT_LENGTH;
  }
  if (!/^\d{3}$/.test(input)) {
    return ERROR_INPUT_NUMERIC;
  }

  const digits = input.split("");
  if (new Set(digits).size !== digits.length) {
    return ERROR_INPUT_DUPLICATE;
  }

  return "";
}
