import styles  from '../../../styles/CardContent/CardContent.module.css'
import { CardHeader } from '../../molecules/CardContent/CardHeader'
import { CardActions } from '../../molecules/CardContent/CardActions'
interface postCardProps {
    title: string
    category: string
    imgPath: string
    textinfo: string
    imgUrl:string
}

export const PostCard = (
    {
        title,
        category,
        imgPath,
        textinfo,
        imgUrl
    }: postCardProps
) => {
    return (
        <div 
            className={styles.cardContainer}
        >
            <CardHeader
                imgPath={imgUrl} 
                title={title} 
                category={category} 
            />
            <div
                className={styles.cardImageContainer}
            >
                <img 
                    className={styles.cardImage}
                    src={imgPath} alt="cardImg" 
                />
            </div>
            <CardActions 
                textInfo={textinfo} 
                className={styles.cardActions}
            />
        </div>
    )
}

