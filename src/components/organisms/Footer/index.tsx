import { FooterBrand } from "../../molecules/Footer/FooterBrand"
import { FooterServices } from "../../molecules/Footer/FooterServices"
import { FooterSchedule } from "../../molecules/Footer/FooterSchedule"
import { FooterSocial } from "../../molecules/Footer/FooterSocial"
import { FooterContact } from "../../molecules/Footer/FooterContact"
import { FooterBottomInfo } from "../../molecules/Footer/FooterBottomInfo"
import { DivContainer } from "../../atoms/common/divContainer/Div"
import styles from '../../../styles/footer/Footer.module.css'
import { brandItems } from "../../../utils/mockHomeData"






const Footer = () => {
    return(
        <footer className={`footerBackground`}>
            <DivContainer className={`footer`}>
                <FooterBrand
                    className={styles.brand} // main class
                    classBrand={styles.LogoBrand}
                    brandItems={brandItems}
                    headingClass={styles.headingClass}
                    textHeading="equilibrio, movimiento y bienestar"
                    descriptionClass={styles.descriptionClass}
                >
                    Fisioterapia personalizada que combina técnicas modernas con atención cercana.
                    <span className={styles.lineDescription}></span>
                </FooterBrand>
                {/* <FooterServices
                    className={styles.services} //main class
                /> */}
            </DivContainer>
        </footer>
    )
}
export default Footer