// src/components/organisms/HeroSection/HeroSection.tsx
import { HeroContent } from '../../molecules/HeroContent/HeroContent'
import styles from '../../../styles/HeroContent/HeroContent.module.css'


interface HeroSectionProps {
    title: string
    subtitle: string
    ctaLabel: string
    children?: React.ReactNode
    onCtaClick?:  () => void
}

export function HeroSection({ title, subtitle, ctaLabel, children, onCtaClick }: HeroSectionProps) {
    return (
        <section
            className={styles.hero}
        >
        <div className={styles.overlay} />
        <div className={styles.content}>
            <HeroContent
                title={title}
                subtitle={subtitle}
                ctaLabel={ctaLabel}
                onCtaClick={onCtaClick ? onCtaClick : () => {}} 
            >
                {children}
            </HeroContent>
        </div>
    </section>
    )
}