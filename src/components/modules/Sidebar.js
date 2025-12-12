"use client";

import React, { useState } from 'react'
import { CgProfile } from "react-icons/cg";
import styles from '../templates/account.module.css';
import { useRouter } from "next/navigation";
import Item from './Item';

function Sidebar() {
 const [style, setStyle] = useState({
    dashboard: true,
    edit: false,
    courses: false,
    exit: false,
 })

 const router = useRouter();

const clickHandler = (name)=>{
    setStyle({
        dashboard: false,
        edit: false,
        courses: false,
        exit: false,
        [name]: true,   
    });

    if (name === "dashboard") {
      router.push("/account");
    } else if (name === "exit") {
      router.push("/signin");
      
    } else {
      router.push(`/account/${name}`);
    }
    
}
  return (
    <div>
      <div>
        <span>
          <CgProfile />
        </span>
        <span>دانشجو</span>
      </div>
      <div className={styles.operations}>
        <Item
          clickHandler={clickHandler}
          title="داشبورد"
          item="dashboard"
          style={style.dashboard}
        />

        <Item
          clickHandler={clickHandler}
          title="ویرایش اطلاعات"
          item="edit"
          style={style.edit}
        />

        <Item
          clickHandler={clickHandler}
          title="دوره های من"
          item="courses"
          style={style.courses}
        />
        <Item
          clickHandler={clickHandler}
          title="خروج"
          item="exit"
          style={style.exit}
        />
      </div>
    </div>
  )
}


export default Sidebar


