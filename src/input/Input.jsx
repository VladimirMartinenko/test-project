import React from 'react'
import cx from 'classnames'
import { Field } from 'formik'
import style from './Input.module.scss'

const Input = ({ name, type, text, ...restProps }) => {
  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        const inputStyles = cx(style.input, {
          [style.validInput]: meta.touched && !meta.error,
          [style.invalidInput]: meta.touched && meta.error
        })
        return (
          <div className={style.position}>
            <input
              {...field}
              type={type}
              className={inputStyles}
              {...restProps}
            />
            {meta.touched && meta.error ? (
              <div className={style.error}>{meta.error}</div>
            ) : (
              <div className={style.helperText}>{text}</div>
            )}
            {/* <ErrorMessage
              name={name}
              component='div'
              className={style.error}
            /> */}
          </div>
        )
      }}
    </Field>
  )
}

export default Input
