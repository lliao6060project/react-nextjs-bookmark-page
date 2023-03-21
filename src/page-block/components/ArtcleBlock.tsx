import type { PropsWithChildren } from "react"
import Desc from "./Desc"
import Title from "./Title"

interface ArtcleBlockProps extends PropsWithChildren{
  title: string
  desc: string
}


const ArtcleBlock = ({ children, title, desc }: ArtcleBlockProps) => {
  return (
    <div>
      <Title
        title={title}
        customClass="xl:text-left"
      />
      <br />
      <Desc desc={desc} />
      <div className="
        w-3/4
        mx-auto
        grid
        gap-5
        py-10
        text-center
        md:w-5/12
        xl:grid-cols-2
        xl:mx-0
        xl:w-9/12
      ">
        {children}
      </div>
    </div>
  )
}

export default ArtcleBlock