import type { Isections } from "../../customTypes/Isections"

interface NavOptionsProps {
    className:string
    options:Isections[]
}

export const NavOptions = (props:NavOptionsProps) => (
    <ul className={props.className}>
        {
            props.options.map ((item,index) => (
                <li key={index}>
                    {item.title}
                </li>
            ))
        }
    </ul>
)