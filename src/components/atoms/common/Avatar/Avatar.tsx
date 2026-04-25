
interface avatarProps {
    className?: string
    imgPath:string
    alt: string
}
export const Avatar = ({ className, imgPath, alt}:avatarProps) => (
    <div className={className}>
        <img src={imgPath} alt={alt} />
    </div>
)