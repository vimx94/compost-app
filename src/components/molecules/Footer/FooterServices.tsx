import { DivContainer } from "../../atoms/common/divContainer/Div"
import { Heading } from "../../atoms/common/heading/heading"
import type { Isections } from "../../customTypes/Isections"

interface FooterServicesProps {
    className?: string | ''
    textHeading: string
    headingClass: string | ''
    list:Isections[]
    listStyles: string | ''
}

export const FooterServices = ({
    className, 
    textHeading, 
    headingClass,
    list,
    listStyles

}:FooterServicesProps) => (
    <DivContainer
        className={className}
    >
        <Heading
            className={headingClass}
            level={3}
            text={textHeading}
        />
        <nav className={listStyles}>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>
                            {item.title}
                        </li>
                    ))
                }
            </ul>
        </nav>
    </DivContainer>
)