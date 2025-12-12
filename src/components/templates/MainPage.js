import Slider from "../modules/Slider"
import TitleBox from "../modules/TitleBox"

import Card from '../modules/Card'

async function MainPage() {
    const url = process.env.BASE_URL;
    const res = await fetch(`${url}/account/courses/`, {
    next: { revalidate: 5 },
  });

    const data = res.json();
    const newCourses = data.slice(0,4)
    
    const populars = data.filter((item)=> item.score > 3)
    const popularCourses = filteredCoursesByScore.slice(0, 4);

    const articleRes = await fetch(`${url}/articles/`, {
    next: { revalidate: 5 },
  });

    const articles = articleRes.json();
    const newArticles = articles.slice(0,4)

  return (
    <div>
        <Slider/>
        <TitleBox seeAll={true} title={'جدیدترین دوره ها'}/>
        <div className={styles.courses}>
          {newCourses?.map((item, index)=>{
          <Card key={index} item={item} />
        })}
        </div>
        <TitleBox seeAll={true} title={'محبوب ترین دوره ها'}/>
        <div className={styles.courses}>
          {popularCourses.map((item, index)=>{
          <Card key={index} item={item} />
        })}
        </div>
        <TitleBox seeAll={true} title={'جدیدترین مقالات'}/>
        <div className={styles.courses}>
          {newArticles.map((item, index)=>{
          <Card key={index} item={item} />
        })}
        </div>
    </div>
  )
}

export default MainPage