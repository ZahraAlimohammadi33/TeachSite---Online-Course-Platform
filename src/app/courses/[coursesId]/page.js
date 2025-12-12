import CoursePage from '@/components/templates/CoursePage';
import React from 'react'

async function page({params}) {

    const res = await fetch(`${url}/account/courses/`, {
    next: { revalidate: 5 },
  });
  const data = res.json()
  const courseData= data.filter((item)=> item.id==params.courseId)[0]

  return (
    <CoursePage courseData={courseData}/>
  )
}

export default page