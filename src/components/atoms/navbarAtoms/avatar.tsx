
interface NavLinkProps {
    label: string
}

const NavLinkAtom = (props:NavLinkProps) => (
    <li>
        {props.label}
    </li>
)

export default NavLinkAtom;