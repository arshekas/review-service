import { css } from '@emotion/css/macro'

export const createButton = css`
   align-self: flex-end;
   @media only screen and (max-width: 51.25em) {
      align-self: center;
   }
`

export const reviewFormWrapper = css`
   display: grid;
   justify-content: center;
`

export const reviewFormTags = css`
   display: grid;
   margin-bottom: 1rem;
   > div {
      width: 25rem !important;
   }
   @media only screen and (max-width: 51.25em) {
      > div {
         width: 15rem !important;
      }
   }
`
