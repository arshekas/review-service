import React from 'react'
import { css } from '@emotion/css/macro'
import { Field, ErrorMessage } from 'formik'
import ErrorFeedback from './ErrorFeedback'

const LabelField = ({
   label,
   width,
   name,
   type,
   disabled,
   as,
   ...otherProps
}) => {
   if (type === 'checkbox' || type === 'radio') {
      return (
         <div className={fieldWrapper}>
            <Field
               style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
               }}
            >
               <Field type={type} name={name} />
               {label}
            </Field>
            <ErrorFeedback>
               <ErrorMessage name={name} />
            </ErrorFeedback>
         </div>
      )
   }
   return (
      <div className={fieldWrapper({ width })}>
         {label && <label>{label}</label>}
         <Field
            disabled={disabled}
            as={as}
            type={type}
            style={{ resize: 'vertical' }}
            name={name}
            size={as !== 'select' ? '7' : 0}
            {...otherProps}
         />
         <ErrorFeedback>
            <ErrorMessage name={name} />
         </ErrorFeedback>
      </div>
   )
}
export default LabelField

export const fieldWrapper = ({ width }) => css`
  padding-bottom: 0.2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  width: ${width ? width : '25rem'};
  @media only screen and (max-width: 51.25em) {
      width: 15rem;
   }
  input {
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: rgba(0,0,0,.85);
    font-size: 14px;
    line-height: 1.5715;
    background-color: var(--background);
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all .3s;
    display: inline-flex;
    &:focus {
      border-color: var(--input-focus-border);
      box-shadow: 0 0 0 2px rgba(24,144,255,.2);
      border-right-width: 1px;
      outline: 0;
    }
`
