import { Avatar } from "../../atoms/common/Avatar/Avatar"
import { Paragraph } from "../../atoms/common/paragraph/Paragraph"
import  { Tag }  from '../../atoms/cardAtoms/Tag'
import styles from '../../../styles/CardContent/CardContent.module.css'

interface cardHeaderProps {
    title: string
    category?: string
    imgPath: string
}

export const CardHeader = ( {title, category, imgPath}: cardHeaderProps) => {
    return (
        <div
            className={styles.cardHeaderflex}
        >
            <Avatar
                className={styles.cardAvatar}
                imgPath={imgPath}
                alt="compostura"
            />
            <div style={{ flex: 1 }}>
                <Paragraph 
                    text={title}
                    className={styles.headtitlecard}
                /> 
                { category && (
                        <div style={{marginTop: 4}}>
                            <Tag label={category}/>
                        </div>
                    )
                }
            </div>            
        </div>
    )
}