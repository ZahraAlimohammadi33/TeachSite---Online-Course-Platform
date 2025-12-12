"use-client"

import Link from 'next/link'
import React, { useState } from 'react'
import styles from './signUp.module.css'
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignUpPage() {

  const [username, setUsername]= useState('')
  const [password, setPassword]= useState('')
  const [role, setRole] = useState('user')

  const router = useRouter();

   useEffect(()=>{
      const authentication= async()=>{
          if(await checkAuth()){
          router.push("/account");
          }
      }
  
      authentication();
      
    },[])

  const signUpHandler = async ()=>{
    const res = await fetch('fetch("http://127.0.0.1:8000/account/users/"', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        role,
      }),
    }
    )

    const data = await res.json()

    if(data.id){
        toast.success("ثبت نام با موفقیت انجام شد");
        setTimeout(() => {
        router.push("/signin");
      }, 3000);
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
        
        <div>
          <input type="checkbox" value={'teacher'} onChange={(e)=> {e.target.checked ? setRole(e.target.value) :setRole('user') }}/>
          <span>نام به عنوان مدرس </span>  
        </div>
        
        <button className={styles.btn} onClick={signUpHandler}>ثبت نام</button>

        <span >حساب کاربری دارید؟ <Link>ورود</Link></span>
        <Toaster/>
    </div>
  )
}
