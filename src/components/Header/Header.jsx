import React from 'react';
import style from "./Header.module.scss";
import MainImg from '../MainImg/MainImg';

const Header = () => {
  return (
    <header className={style.header}>
      <nav  className={style.nav}>
        <div className={style.nav_container}>
      <img src="/staticImages/Logo.svg" alt="logo"  className={style.img}/>
        <div className={style.container_button}>
        <a href='#user' className={style.button}>Users</a>
        <a href='#registration' className={style.button}>Sign up</a>
        </div>
        </div>
      </nav>
      <MainImg/>
    </header>
  );
}

export default Header;
