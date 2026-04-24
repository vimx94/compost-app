// src/pages/Home/HomePage.tsx
import { HeroSection } from '../components/organisms/HeroSection/HeroSection'
import styles from '../styles/HeroContent/HeroContent.module.css'

export function HomePage() {
    const handleCtaClick = () => {
    // scroll a siguiente sección, navegar, etc.
        document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <HeroSection
                title='Fisioterapia especializada'
                subtitle={`
                        En Compostura, nos especializamos en fisioterapia personalizada 
                        para ayudarte a recuperar tu movilidad, aliviar el dolor y mejorar 
                        tu calidad de vida. Nuestro enfoque combina técnicas modernas con 
                        atención cercana, adaptándonos a tus necesidades para lograr una 
                        recuperación efectiva y duradera.
                    `}
                ctaLabel="Saber más"
                onCtaClick={handleCtaClick}
            >
                Compostura:<br/>
                <em>equilibrio,</em><br/>
                <span className={styles.wordaccent}>movimiento</span> y<br/>
                bienestar
            </HeroSection>

            <section id="servicios">
                {/* siguiente sección */}
            </section>
        </>
    )
}