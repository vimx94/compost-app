import { DivContainer } from "../../atoms/common/divContainer/Div"
import { Avatar } from "../../atoms/common/Avatar/Avatar"
import { Heading } from "../../atoms/common/heading/heading"
import { Paragraph } from "../../atoms/common/paragraph/Paragraph"

interface FooterBrandProps {
    className?: string | ''
    classAvatar?: string | ''
    imgPath: string | ''
    textHeading: string
    children?: React.ReactNode
    headingClass: string | ''
    descriptionClass: string | ''
}

export const FooterBrand = ({
    className, 
    classAvatar, 
    imgPath, 
    textHeading, 
    children,
    headingClass,
    descriptionClass
}:FooterBrandProps) => {
    return(
        <DivContainer
            className={className}
        >
            <Avatar 
                className={classAvatar}
                imgPath={imgPath}
                alt="compostura logo"
            />
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