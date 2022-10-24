import { css } from '@emotion/css/macro'

export const docWrapper = css`
   width: 50%;
   margin: 0 auto;
   margin-top: var(--padding-xl);
   @media only screen and (max-width: 51.25em) {
      width: 90%;
   }
   h2 {
      font-family: var(--font-family);
      text-align: center;
      font-weight: 700;
   }
   ul {
      list-style-type: none;
      padding: 0;
      border: 1px solid silver;
   }
   li {
      border: 1px solid whitesmoke;
      padding: var(--padding) var(--padding-s);
   }
`
