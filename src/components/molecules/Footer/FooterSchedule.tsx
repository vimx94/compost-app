import { DivContainer } from "../../atoms/common/divContainer/Div"
import { hoursSchedule } from "../../../utils/mockHomeData"
import { Heading } from "../../atoms/common/heading/heading"

interface footerScheduleProps {
    className: string |''
    HeadClass: string | ''
    title: string

}
export const FooterSchedule = ({className, HeadClass, title}:footerScheduleProps) => (
    <DivContainer
        className={className}
    >
        <Heading className={HeadClass} text={title} level={3}/>
        {hoursSchedule.map(([d, h]: [string, string]) => (
            <DivContainer className="c-hours__row" key={d}>
                <span className="c-hours__day">{d}</span>
                <span className="c-hours__time">{h}</span>
            </DivContainer>
        ))}
    </DivContainer>
)