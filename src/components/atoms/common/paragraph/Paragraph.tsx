interface ParagraphProps {
    text?: string
    className?: string
    children?: React.ReactNode
}

export const Paragraph = ({text, className, children}:ParagraphProps) => (
    <p className={className}>{children ?? text}</p>
)