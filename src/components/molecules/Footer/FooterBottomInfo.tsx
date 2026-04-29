import { DivContainer } from "../../atoms/common/divContainer/Div"

interface FooterBottomProps {
    className: string
    classTitle: string
    footerBrandTitle: string
}

export const FooterBottomInfo = ({
    className,
    classTitle,
    footerBrandTitle,
    ...rest
}: FooterBottomProps) => (
    <DivContainer className={className} {...rest}>
        <DivContainer className={classTitle}>
            {footerBrandTitle}
        </DivContainer>
    </DivContainer>
)