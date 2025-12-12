import React from 'react'
import Image from 'next/image'
import styles from './course.module.css'
import Link from 'next/link';

function ArticlePage({articleData}) {

    const splitDes = articleData.description.split('.')
    splitDes.slice(splitDes.length -1 , 1)

  return (
    
    <div className={styles.container}>
      <h1>{articleData.title}</h1>
      <div className={styles.main}>
        <div className={styles.right}>
          <Image
            src={`${url.concat(articleData.image)}`}
            width={600}
            height={300}
            alt="article"
          />
          <div> متن مقاله:</div>
          {splitDes.map((item, index) => (
            <div key={index}>
              <p>{item}</p>
              <Image
                src={url.concat(articleData.imagesInDes[index])}
                width={600}
                height={300}
                alt="article"
              />
            </div>
          ))}
        </div>
        <div className={styles.left}>
          <Image
            src={`${url.concat(articleData.image)}`}
            width={300}
            height={200}
            alt="article"
          />
          <div className={styles.details}>
            <span> نویسنده مقاله:</span>
            <span>{articleData.author}</span>
          </div>

          <Link href={"/"}>
            <button>بازگشت به صفحه اصلی</button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}


export default ArticlePage
