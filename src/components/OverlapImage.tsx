/* eslint-disable @next/next/no-img-element */
import type { PropsWithChildren } from "react"

interface OverlapImageProps extends PropsWithChildren {
  imgName: string
  position: string
}


const OverlapImage = ({imgName, position}: OverlapImageProps) => {
  return (
    <div className="overlap-image-wrapper">
      <div className={`overlap-img-block ${position}`}>
        <img
          src={`/images/${imgName}.png`}
          alt={`${imgName} image`}
        />
      </div>
    </div>
  )
}

export default OverlapImage