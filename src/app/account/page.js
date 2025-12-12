import AccountPage from '@/components/templates/AccountPage';
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import React from 'react'

async function page() {

  const cookie = cookies();
  const user = cookie.getAll()[0]?.name;
  if(!user) redirect('/signin')
  const username = JSON.parse(user).username
  const password = JSON.parse(user).password

  const users = await (await fetch("http://127.0.0.1:8000/account/users/")).json()
  users.filter((item) => item.username==username)

  if (result.length && await VerifyPassword(result[0].password, cookie.password)) {
              return (
                <AccountPage/>
             )
}else {
    redirect("/signin");
  }
  
}

export default page