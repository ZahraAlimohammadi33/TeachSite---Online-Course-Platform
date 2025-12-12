"use client";

import Image from 'next/image';
import styles from './course.module.css'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import checkAuth from '@/utils/CheckAuth';

function CoursePage({courseData}) {

  const [video, setVideo]= useState(courseData.video[0])

  const router = useRouter()
  useEffect[()=>{
    const authentication = async ()=>{
        if ( !(await checkAuth())){
            router.push('/')
        }
    }

    authentication();
  },[]]

  return (
    <div className={styles.container}>
      <h1>{courseData.title}</h1>
      <div className={styles.main}>
        <div className={styles.right}>
          <h3>{video.title}</h3>
          <video controls src={url.concat(video.video)} />
          <div>توضیحات دوره:</div>
          <p>{courseData.description}</p>

          <div>سرفصل ها:</div>
          {courseData.videos.map((item, index) => (
            <div key={index}>
              <div
                className={styles.section}
                onClick={() => {
                  setVideo(item);
                  window.scrollTo({ top: 200, left: 0, behavior: "smooth" });
                }}
              >
                {item.title}
                <FaPlay />
              </div>
            </div>
          ))}
        </div>
        <div className={styles.left}>
          <Image
            src={`${url.concat(courseData.image)}`}
            width={300}
            height={200}
            alt="course"
          />
          <div className={styles.details}>
            <span>مدرس دوره:</span>
            <span>{courseData.teacher}</span>
          </div>

          <div className={styles.details}>
            <span>مدت زمان دوره:</span>
            <span>{e2p(courseData.time)}</span>
          </div>

          <div className={styles.details}>
            <span>امتیاز دوره:</span>

            <span className={styles.score}>
              {[...Array(courseData.score)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </span>
          </div>
          <button>افزودن به دوره های من</button>
        </div>
      </div>
    </div>
  )
}


export default CoursePage
