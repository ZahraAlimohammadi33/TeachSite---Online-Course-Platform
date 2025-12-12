import React from 'react'
import styles from './list.module.css'

function List({courseItem}) {
  return (
    <ul className={styles.container}>
        {courseItem?.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))
        }
    </ul>
  )
}

export default List