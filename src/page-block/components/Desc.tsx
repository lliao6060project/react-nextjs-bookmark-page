import type { PropsWithChildren } from "react"

interface DescProps extends PropsWithChildren{
  desc: string
  customClass?: string
}


const Desc = ({ desc, customClass }: DescProps) => {
  return (
    <>
      <p className={`
        w-11/12
        mx-auto
        text-base
        text-center
        tracking-wid
        text-gray-400
        md:text-lg
        xl:text-left
        xl:mx-0
        xl:w-10/12
        ${customClass}
      `}>
        {desc}
      </p>
    </>
  )
}

export default Desc