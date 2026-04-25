import { Paragraph } from "../../atoms/common/paragraph/Paragraph"
interface cardActionsProps {
    textInfo: string
    className: string
}

export const CardActions = (props:cardActionsProps) => (
    <div className={props.className}>
        <Paragraph text={props.textInfo}/>
    </div>
)