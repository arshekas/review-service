import { css } from '@emotion/css/macro'

export const reviewWrapper = css`
   box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
   display: grid;
   grid-template-columns: 10rem 1fr;
   justify-content: space-between;
   padding: var(--padding);
   font-family: var(--font-family);
   @media only screen and (max-width: 51.25em) {
      grid-template-columns: 1fr;
      gap: var(--gap);
   }
`

export const reviewLeft = css`
   align-self: center;
   justify-self: center;
   img {
      width: 5rem;
   }
`

export const reviewRight = css`
   justify-self: flex-start;
   width: 100%;
   h3 {
      font-weight: 700;
   }
   span {
      color: var(--primary);
      cursor: pointer;
      text-decoration: underline;
   }
`

export const headerRight = css`
   display: flex;
   justify-content: space-between;
`

export const reviewActions = css`
   display: flex;
   gap: var(--gap-s);
`

export const rating = css`
   display: flex;
   svg {
      color: var(--primary);
      margin: 0.3rem 0.5rem 0 0;
   }
`

export const tags = css`
   position: relative;
   display: inline-block;
   border-radius: 6px;
   clip-path: polygon(12px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 12px);
   background: var(--primary);
   padding: 4px 12px;
   cursor: pointer;
   color: var(--text);
   margin: 0 6px 6px 0;
   transition: clip-path 500ms;
   &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      background: var(--text);
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 6px 0;
      transition: transform 500ms;
   }
   &:hover {
      :hover {
         clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0% 100%, 0% 0px);
      }
   }
   &:hover:after {
      transform: translate(-100%, -100%);
   }
`
