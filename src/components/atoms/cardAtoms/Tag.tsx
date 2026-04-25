

interface TagProps {
    className?: string
    label?: string
    children?: React.ReactNode
}

export const Tag = ({ 
    children,
    label,
    className
}:TagProps) => (
    <span className={className}>
        {children ?? label}
    </span>
)