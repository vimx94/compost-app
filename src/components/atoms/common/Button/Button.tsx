interface ButttonProps {
    label?: string
    onClick: () => void
    variant?: 'primary' | 'outline'
    className?: string
    children?: React.ReactNode
}

export const CustomButton = ({ label, onClick, variant, className, children }:ButttonProps) => (
    <button
        className={`btn btn--${variant} ${className?? ''}`}
        onClick={onClick}
    >
        { children ?? label}
    </button>
)