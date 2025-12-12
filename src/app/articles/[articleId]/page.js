import React from 'react'
import { redirect } from "next/navigation";
import ArticlePage from '@/components/templates/ArticlePage';

async function page({params}) {

  const articleRes = await fetch(`${url}/articles/`, {
    next: { revalidate: 5 },
  });

  const articles = await articleRes.json();
  const articleData= articles.filter((item)=> item.id==params.articleId)[0];
   if(!articleData){
        redirect("/")
    }
  return (
   <ArticlePage articleData={articleData}/>
  )
}

export default page