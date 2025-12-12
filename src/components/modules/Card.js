import React from 'react'
import Image from "next/image";
import { GiTeacher } from "react-icons/gi";
import { FaMoneyBill } from "react-icons/fa";
import { FaUserPen } from "react-icons/fa6";
import { separator } from '@/utils/Operations';
import Link from 'next/link';

function Card({item , type , titleBtn}) {
  const url = process.env.BASE_URL;
  return (
    <div>
        <Image 
            width={250}
            height={150}
            alt='image'
            src={`${url.concat(item.image)}`}
        />
        <div>{item.title}</div>
        <p>{item.description}</p>

        {type == 'course' ? ( <div>
            <div>
                <span>
                     <GiTeacher />
                </span>
                {item.teacher}
            </div>
            <div>
                <span>
                     <FaMoneyBill />
                </span>
                {separator(item.price)}
            </div>
        </div>) : (
            <div className={styles.details}>
          <div>
            <span>
              <FaUserPen />
            </span>
            {item.author}
          </div>
        </div>
        )
        }
       <Link href={type=='article' ? `articles/${item.id}` : `courses/${item.id}`}>
          <button>{titleBtn}</button>
       </Link>
    </div>
  )
}


export default Card
