import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './signUp.module.css'
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { HashPassword } from '@/utils/Operations';
import checkAuth from '@/utils/CheckAuth';



function SignInPage() {
  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  
  const router = useRouter();

  useEffect(()=>{
    const authentication= async()=>{
        if(await checkAuth()){
        router.push("/account");
        }
    }

    authentication();
    
  },[])

  const signInHandler = async ()=>{
    const res = await fetch('fetch("http://127.0.0.1:8000/account/users/"',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({username,password}),
    })
    

    const data = await res.json()

    if(data.status == 200){
        toast.success(" ورود با موفقیت انجام شد");
        setTimeout(() => {
        router.push("/account");
        location.reload
      }, 3000);

      const hashedPassword = HashPassword(password);
       document.cookie = JSON.stringify({username: username,
         password: hashedPassword})
    } else{
      toast.error(data.message);
    }
  }


  return (
    <div className={styles.container}>
        <div>
            <label htmlFor='username'>نام کاربری</label>
            <input id='username' type='text' onChange={(e)=>setUsername(e.target.value)} value={username}></input>
        </div>
        
        <div>
            <label htmlFor='password'>رمز عبور</label>
            <input id='password' type='password' onChange={(e)=> setPassword(e.target.value)} value={password} ></input>
        </div>
        
        
        <button className={styles.btn} onClick={signInHandler}>ورود</button>

        <span >حساب کاربری ندارید؟ <Link>ثبت نام</Link></span>
        <Toaster/>
    </div>
  )
}


export default SignInPage