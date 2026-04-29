import { DivContainer } from "../../atoms/common/divContainer/Div"
import { Heading } from "../../atoms/common/heading/heading"
import { Paragraph } from "../../atoms/common/paragraph/Paragraph"
import { HeaderLogo } from "../../atoms/navbarAtoms/HeaderLogo"
import type { IBrand } from "../../customTypes/IBrand"


interface FooterBrandProps {
    className?: string | ''
    classBrand?: string | ''
    brandItems: IBrand[]
    textHeading: string
    children?: React.ReactNode
    headingClass: string | ''
    descriptionClass: string | ''
}

export const FooterBrand = ({
    className, 
    classBrand, 
    brandItems,
    textHeading, 
    children,
    headingClass,
    descriptionClass
}:FooterBrandProps) => {
    return(
        <DivContainer
            className={className}
        >
            <DivContainer className={classBrand}>
                {
                    brandItems.map((item,index)=>(
                        <HeaderLogo
                            key={index} 
                            className={item.className}
                            path={item.imgPath}
                            alt={item.alt} 
                        />
                    ))
                }
            </DivContainer>
            <Heading
                className={headingClass}
                level={2}
                text={textHeading}
            />
            <Paragraph
                className={descriptionClass}
            >
                {children}
            </Paragraph>
        </DivContainer>
    )
}