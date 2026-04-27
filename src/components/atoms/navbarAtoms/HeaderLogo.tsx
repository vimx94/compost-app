
interface HeadLogoProps{
    className: string | ''
    path: string | ''
    alt: string | ''
}
export const HeaderLogo = (props:HeadLogoProps) => (
    <figure>
        <img
            className={props.className} 
            src={props.path}
            alt={props.alt} 
        />
    </figure>
)