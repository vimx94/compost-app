import { DivContainer } from "../../atoms/common/divContainer/Div"
import { Heading } from "../../atoms/common/heading/heading"
import { CustomLink } from "../../atoms/common/CustomLink/CustomLink"
import type { IsocialMedia } from "../../customTypes/Isocialmedia"


interface FooterSocialProps {
    className?: string | ''
    textHeading: string
    headingClass: string | ''
    listSocial: IsocialMedia[]
}

export const FooterSocial = ({
    className, 
    textHeading, 
    headingClass,
    listSocial


}:FooterSocialProps) => (
    <DivContainer
        className={className}
    >
        <Heading
            className={headingClass}
            level={3}
            text={textHeading}
        />
        <DivContainer>
            {
                listSocial.map((item,index)=>(
                    <CustomLink
                        key={index}
                        label={item.label}
                        href={item.href}
                        className={item.className}
                    />
                ))
            }
        </DivContainer>
    </DivContainer>
)