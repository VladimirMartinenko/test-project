import React, { useEffect, useState } from 'react'
import { Formik, Form, Field } from 'formik'
import cx from 'classnames'
import style from './Registration.module.scss'
import { REGISTRATION_CHEMA } from '../../utils/validationSchemas'
import Input from '../../input/Input'

const initialValues = {
  name: '',
  email: '',
  phone: '',
  position_id: '',
  photo: ''
}

console.log(initialValues)
const Registration = ({ onChange }) => {
  // put photo in label(changes input type=file)
  let text = 'Upload your photo'
  const textF = () => {
    if (document.getElementsByName('photo')[0].value === '') {
      return (text = 'Upload your photo')
    } else {
      return (text = document.getElementsByName('photo')[0].value)
    }
  }

  const [position, setPosition] = useState(null)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)

  // get position from radio button
  useEffect(() => {
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/positions`)
      .then(res => res.json())
      .then(data => setPosition(data))
  }, [])
  //get token
  useEffect(() => {
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/token')
      .then(res => res.json())
      .then(token => setToken(token))
  }, [])

  console.log(position)
  console.log(token)
  // create FormData vith initialValues
  const data = new FormData()

  const formData = values => {
    data.append('position_id', `${values.position_id}`)
    data.append('name', values.name)
    data.append('email', `${values.email}`)
    data.append('phone', `${values.phone}`)
    data.append('photo', document.getElementsByName('photo')[0].files[0])
    for (const [key, value] of data) {
      console.log(`${key}: ${value}\n`)
    }
  }

  const handleChange = () => {
    onChange([]) // callback-функция from update users after registratin
  }

  const onSubmit = (values, utils) => {
    // create user
    formData(values)
    fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
      method: 'POST',
      headers: {
        Token: token.token
      },
      body: data
    })
      .then(res => res.json())
      .then(data => {
        setUser(data)
        console.log(data)
        if (data.success) {
          console.log('process success response')
          handleChange()
        } else {
          console.log('proccess server errors')
        }
      })

    utils.resetForm()
  }

  return (
    <section className={style.main} id='registration'>
      <h1 className={style.h1}>Working with POST request</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={REGISTRATION_CHEMA}
        onSubmit={onSubmit}
      >
        {({ values, errors, field, meta, touched, isValid, dirty }) => {
          const buttonStyles = cx(style.button, {
            [style.validButton]: dirty && isValid
          })
          return (
            <Form className={style.form}>
              <Input name='name' type='text' placeholder='Your name' />
              <Input name='email' type='email' placeholder='Email' />
              <Input
                name='phone'
                type='phone'
                placeholder='Phone'
                text='+38 (XXX) XXX - XX - XX'
              />
              <div id='my-radio-group' className={style.h1_radio}>
                Select your position
              </div>

              <div
                className={style.radio_position}
                role='group'
                aria-labelledby='my-radio-group'
              >
                {position &&
                  position.positions.map(position => (
                    <div key={position.id}>
                      <label className={style.radio_text}>
                        <Field
                          type='radio'
                          name='position_id'
                          value={`${position.id}`}
                          className={style.radio_button}
                        />
                        {position.name}
                      </label>
                    </div>
                  ))}
              </div>

              <label
                htmlFor='file'
                className={style.inputStyles}
                onChange={() => textF()}
              >
                <span className={style.span}>
                  <p className={style.p}>upload</p>
                  <p className={style.p_field}>{text}</p>
                </span>
                <Input
                  name='photo'
                  type='file'
                  id='file'
                  className={style.feedback__file}
                />
              </label>

              <button
                type='submit'
                className={buttonStyles}
                disabled={!isValid || !dirty}
              >
                Sign up
              </button>
            </Form>
          )
        }}
      </Formik>
      {user && user.success ? (
        <div className={style.after}>
          <h1>User successfully registered</h1>
          <img
            src='/staticImages/success-image.svg'
            alt='success'
            className={style.img}
          />
        </div>
      ) : (
        <></>
      )}
    </section>
  )
}

export default Registration
