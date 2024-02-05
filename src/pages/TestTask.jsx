import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Users from '../components/Users/Users';
import style from './TestTask.module.scss'
import Registration from '../components/Registration/Registration';

const TestTask = () => {

  const [value, setValue] = useState()//state for callback function

  //callback function to get data from the registration component(user updates)
  const handleChange = value => {
    setValue(value)
  }
  return (
    <div className={style.main}>
      <Header/>
      <main className={style.div}>
      <Users value={value}/>
      <Registration onChange={handleChange}/>
      </main>
    </div>
  );
}

export default TestTask;
