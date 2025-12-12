import { VerifyPassword } from "./Operations";

export default async function checkAuth(){
    if(document.cookie){
        const res = await fetch("http://127.0.0.1:8000/account/users/");
        const data = res.json();
        const cookie = JSON.parse(document.cookie)

       const result = data.filter((item)=> item.username== cookie.username)
       
       if (result.length && await VerifyPassword(result[0].password, cookie.password)) {
            return true;
    }
        return false;

    }
}