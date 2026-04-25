import { PostCard } from "../PostCard/PostCard";
import type { Icard } from "../../customTypes/Icard";
import styles from '../../../styles/CardContent/CardContent.module.css'
import { Paragraph } from "../../atoms/common/paragraph/Paragraph";

interface healthCareProps {
    headingTitle: string
    cardList: Icard[]

}

export const HealthCareSection = ({cardList,headingTitle}:healthCareProps) => {
    return(
        <section className={`section`}>
            <Paragraph className={styles.headingTitle} text={headingTitle}/>
            <div className={`${styles.gridCards}`}>
                {
                    cardList.map((card, index)=>(
                        <PostCard
                            key={index}
                            imgUrl={card.avatar}
                            title={card.title}
                            category={card.category}
                            imgPath={card.imgPath}
                            textinfo={card.textInfo}
                        />
                    ))
                } 
            </div>
        </section>
    )
} 