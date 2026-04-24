import { Heading } from "../../atoms/common/heading/heading";
import { Paragraph } from "../../atoms/common/paragraph/Paragraph";
import { CustomButton } from "../../atoms/common/Button/Button";
import styles  from '../../../styles/HeroContent/HeroContent.module.css'

interface HeroContentProps {
    title: string
    subtitle: string
    ctaLabel: string
    children? : React.ReactNode
    onCtaClick?:  () => void
}

export const HeroContent = ({title, subtitle, ctaLabel, children, onCtaClick}:HeroContentProps) => (
    <div className={`${styles.heroContent} section`}>
        <Paragraph
            text={title}
            className={styles.eyebrow}
        />
        <div className={styles.rule}></div>
        <Heading  
            level={1} 
            className={styles.title}
        >
            {children}
        </Heading>
        <Paragraph 
            text={subtitle} 
            className={styles.subtitle}
        />
        <CustomButton 
            className={styles.btnCta}
            onClick={onCtaClick ? onCtaClick : () => {}} 
            variant="outline" 
        >
            <span>{ctaLabel}</span>
        </CustomButton>
    </div>
)