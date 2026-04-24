interface ParagraphProps {
    text: string
    className?: string
}

export const Paragraph = ({text, className}:ParagraphProps) => (
    <p className={className}>{text}</p>
)