import { css } from '@emotion/css/macro'

export const header = css`
   position: fixed;
   width: 100%;
   height: var(--heading-height);
   z-index: 1000;
   &::before {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      bottom: 6em;
      width: 100%;
      height: calc(var(--heading-height) + 10em);
      z-index: -1;
      transform: skewY(-3.5deg);
      background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6)),
         url(https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)
            no-repeat center,
         linear-gradient(#4e4376, #2b5876);
      background-size: cover;
      border-bottom: 0.2em solid var(--background);
   }
   @media only screen and (max-width: 51.25em) {
      height: calc(var(--heading-height) + 6rem);
   }
`

export const headerWrapper = css`
   display: flex;
   align-items: center;
   justify-content: space-around;
   padding: 2rem 0 0 0;
   @media only screen and (max-width: 51.25em) {
      flex-direction: column;
      justify-content: center;
      gap: var(--gap-s);
   }
`

export const title = css`
   font-size: var(--font-size-xxxl);
   font-weight: 700;
   margin-top: var(--padding);
   text-align: center;
   font-family: 'Andada Pro', serif;
   text-shadow: 0.022em 0.022em 0.022em #111;
   color: var(--background);
`

export const headerLeft = css``

export const headerRight = css``

export const headerRightList = css`
   display: flex;
   align-items: center;
   gap: var(--gap);
`
