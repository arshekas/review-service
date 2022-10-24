import { css } from '@emotion/css/macro'

export const loginFormWrapper = css`
   display: grid;
   align-items: center;
   justify-content: center;
   min-height: 90vh;
   background-color: #354152;
   margin-top: -5rem;
`

export const loginFormTitle = css`
   font-family: var(--font-family);
   font-weight: 700;
`

export const loginForm = css`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: var(--gap-s);
   justify-content: center;
   padding: var(--padding-xl) var(--padding);
   background-color: var(--background);
   box-shadow: 0 0 50px #000;

   img {
      width: 5rem;
   }
   @media only screen and (max-width: 51.25em) {
      width: 30rem;
   }
`
