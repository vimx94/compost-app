interface divProps {
    className? : string | ''
    children?: React.ReactNode
}

export const DivContainer = ({className, children}: divProps) => (
    <div className={className}>
        {children}
    </div>
)