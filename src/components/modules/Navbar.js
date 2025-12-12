import styles from './header.module.css'
import List from './List'
import { IoIosArrowDown } from "react-icons/io";
export default function Navbar({category}) {


  return (
    <nav>
        <ul className={styles.list}>
            {
                category.map( (item, index) => (
                    <div key={index} onMouseLeave={() => leaveHandler(index)}>
                        <li onMouseEnter={()=> enterHandler(index)}>
                        {item.title}
                        <IoIosArrowDown/>
                        </li>
                        {item.show && <List courseItem={item.subCategory} />}
                    </div>
                ))
            }
        </ul>
    </nav>
  )
}
