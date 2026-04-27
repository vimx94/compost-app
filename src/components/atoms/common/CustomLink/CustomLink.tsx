
interface CustomLinkProps {
    href: string | ''
    label: string | ''
    children?: React.ReactNode
    className: string | ''
}

export const CustomLink = (
    props:CustomLinkProps
) => (
    <a href={props.href} className={props.className}>
        { props.children ?? props.label }
    </a>
)