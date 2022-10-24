import React from 'react'
import { css } from '@emotion/css/macro'

export default function ErrorFeedback({ children, ...otherProps }) {
   return (
      <p className={error} {...otherProps}>
         {children}
      </p>
   )
}

export const error = css`
   display: flex;
   align-items: center;
   color: var(--error);
   height: 0.5rem;
   margin-top: 0.5rem;
   width: 100%;
`
