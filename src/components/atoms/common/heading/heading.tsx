import type { JSX } from 'react'
import React from 'react'

interface HeadingProps {
    text?: string
    level?: 1 | 2 | 3
    className?: string
    children?: React.ReactNode
}

export const Heading = ({ text, level = 1, className, children }: HeadingProps) => {
    const Tag = `h${level}` as keyof JSX.IntrinsicElements;

    return <Tag className={className}>{children ?? text}</Tag>;
};