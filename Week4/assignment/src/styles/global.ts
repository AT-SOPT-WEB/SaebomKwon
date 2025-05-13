import { css } from "@emotion/react";

export const globalStyles = css`
  /* ✅ rem 기준 설정: 1rem = 10px */
  html {
    font-size: 62.5%; /* 62.5% of 16px = 10px → 1rem = 10px */
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    line-height: 1;
  }
  body {
    font-size: 1.6rem; /* = 16px */
  }
`;
