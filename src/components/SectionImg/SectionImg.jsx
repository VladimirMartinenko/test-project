import React, { useState } from 'react'
import style from './SectionImg.module.scss'
import Users from '../Users/Users'
import Registration from '../Registration/Registration'

const SectionImg = () => {
  // const [value, setValue] = useState()
  // const handleChange = value => {
  //   setValue(value)
  // }
  return (
    <div className={style.div}>
      <section className={style.section}>
        <article className={style.article}>
          <h1 className={style.h}>Test assignment for front-end developer</h1>
          <p className={style.p}>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
          <a href='#registration' className={style.button}>
            Sign up
          </a>
        </article>
      </section>
      {/* <Users value={value} />
      <Registration onChange={handleChange} /> */}
    </div>
  )
}

export default SectionImg
