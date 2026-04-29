interface divProps extends React.HTMLAttributes<HTMLDivElement>{}

export const DivContainer = ({className, children, ...rest}: divProps) => (
    <div className={className} {...rest}>
        {children}
    </div>
)