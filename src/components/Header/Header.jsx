import React from 'react';
import style from "./Header.module.scss";
import SectionImg from '../SectionImg/SectionImg';

const Header = () => {
  return (
    <header className={style.header}>
      <nav  className={style.nav}>
      <img src="/staticImages/Logo.svg" alt="logo"  className={style.img}/>
        <div className={style.container_button}>
        <a href='#user' className={style.button}>Users</a>
        <a href='#registration' className={style.button}>Sign up</a>
        </div>
      </nav>
      <SectionImg/>
    </header>
  );
}

export default Header;
