import type { PropsWithChildren } from "react"

interface TitleProps extends PropsWithChildren{
  title: string
  customClass?: string
}


const Title = ({ title, customClass }: TitleProps) => {
  return (
    <h2 className={`
      w-full
      text-2xl
      font-bold
      leading-none
      text-center
      font-[Arial]
      md:text-3xl
      xl:w-10/12
      xl:mt-0
      xl:text-4xl
      2xl:text-5xl
      ${customClass}
    `}>
      {title}
    </h2>
  )
}

export default Title