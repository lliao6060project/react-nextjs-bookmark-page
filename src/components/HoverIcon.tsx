import type { PropsWithChildren } from "react"
import FBIcon from './svg/FBIcon'
import TwitterIcon from './svg/TwitterIcon'

interface HoverIconProps extends PropsWithChildren {
  name: string
  defaultColor?: string
  activeColor?: string
}

type HoverIcon = {
  [name: string]: Record<string, JSX.Element>
}

const HoverIcon = ({ name, defaultColor = '#FFF', activeColor = '#fb5353' }: HoverIconProps) => {
  const components: HoverIcon = {
    fb: {
      default: <FBIcon color={defaultColor} />,
      active: <FBIcon color={activeColor} />
    },
    twitter: {
      default: <TwitterIcon color={defaultColor} />,
      active: <TwitterIcon color={activeColor} />
    },
  }

  return (
    <>
      <div className="
        group/icon-item
        flex-center
        text-center
        transition
        cursor-pointer
      ">
        <p className="group/icon block group-hover/icon-item:hidden">
          {components[name].default}
        </p>
        <p className="group/icon hidden group-hover/icon-item:block">
        {components[name].active}
        </p>
      </div>
    </>
  )
}

export default HoverIcon