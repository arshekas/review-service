import { css } from '@emotion/css/macro'

export const homeWrapper = css`
   display: flex;
   flex-direction: column;
   margin: var(--padding) var(--padding-xl);
   gap: var(--gap);
   padding-bottom: 5rem;
   @media only screen and (max-width: 51.25em) {
      margin-top: 3rem;
   }
`
