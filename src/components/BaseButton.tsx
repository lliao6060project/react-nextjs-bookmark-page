import type { PropsWithChildren } from "react"

interface BaseButtonProps extends PropsWithChildren{
  fill?: boolean
  url?: string
}

const BaseButton = ({ children, ...props}: BaseButtonProps) => {
  const { fill, url } = props
  const fillClass = `
    border-indigo-500
    text-white
    bg-indigo-500
    hover:bg-white
    hover:text-indigo-500
  `
  const defaultClass = `
    bg-gray-100
    border-gray-100
    text-gray-500
    hover:border-gray-400
    hover:text-gray-500
  `
  return (
    <a className={
      `
        px-5
        py-3
        rounded-md
        font-bold
        border-2
        shadow-lg
        shadow-indigo-100
        cursor-pointer
        ${fill ? fillClass : defaultClass}
        `
    }
    rel="noreferrer"
    href={url}
    target="_blank"
  >
      {children}
    </a>
  )
}

export default BaseButton