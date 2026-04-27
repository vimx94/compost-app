import { HeaderLogo } from "../../atoms/navbarAtoms/HeaderLogo"
import { DivContainer } from "../../atoms/common/divContainer/Div"

interface HeaderBrandProps{
    className?: string | ''
    classLogo: string | ''
    classLetters: string |''
    pathLogo: string
    pathletters: string
}

export const HeaderBrand = (props:HeaderBrandProps) => (
    <DivContainer
        className={props.className}
    >
        <HeaderLogo
            className={props.classLogo}
            path={props.pathLogo}
            alt="logoMain"
        />
        <HeaderLogo
            className={props.classLetters}
            path={props.pathletters}
            alt="logoLetters"
        />
    </DivContainer>
)