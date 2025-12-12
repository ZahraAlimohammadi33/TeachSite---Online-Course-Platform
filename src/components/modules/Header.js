"use client"

import { useEffect, useState } from "react"
import Image from "next/image";
import styles from "./header.module.css";
import Navbar from "./Navbar";
import Link from 'next/link'
import checkAuth from "@/utils/CheckAuth";

export default function Header() {
const [setCategory, category]= useState([])
const [profile, setProfile]= useState(false)

useEffect(()=>{
      const categoryData = async () => {
      const res = await fetch("http://127.0.0.1:8000/category/");
      const data = await res.json();
      setCategory(data);
      }

      categoryData();
      if(checkAuth){
        setProfile(true);
      }

      
},[])

  return (
    <header className={styles.container}>
        <div className={styles.right}>
            <Image
            src={"/images/logo.jpg"}
            width={70}
            height={70}
            alt="logo"
            priority={1}
          />
            <Navbar category={category} />
        </div>
        
        {profile ? <Link href={'/account'}> <button>حساب کاربری</button> </Link> : <div className={styles.left}>
            <button>عضویت</button>
            <button>ورود</button>
        </div>}
    </header>
  )
}
