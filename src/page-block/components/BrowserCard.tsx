import BaseButton from "@/components/BaseButton"
import ChromeLogo from "@/components/svg/ChromeLogo"
import Dots from "@/components/svg/Dots"
import FirefoxLogo from '@/components/svg/FirefoxLogo'
import OperaLogo from "@/components/svg/OperaLogo"
import { PropsWithChildren } from "react"


interface BrowserCardProps extends PropsWithChildren {
  name: string
  version: number
  offset?: number
}

type BrowserIcon = {
  [name: string]: Record<string, JSX.Element | string>
}

const BrowserCard = ({name, version, offset }: BrowserCardProps) => {
  const components: BrowserIcon = {
    Chrome: {
      icon: <ChromeLogo />,
      url: ''
    },
    Firefox: {
      icon: <FirefoxLogo />,
      url: ''
    },
    Opera: {
      icon: <OperaLogo />,
      url: ''
    },
  }
  return (
    <div className={`
      relative
      logo-card
      shadow-lg
      grid
      grid-flow-col
      rounded-lg
      top-${offset}
    `}>
      <div className="grid grid-rows-3 gap-4">
        <div className="
          w-full
          row-span-2
          grid
          grid-rows-3
          gap-5
          p-4
          mx-auto
        ">
          <div className="flex flex-col justify-center row-span-2 mx-auto">
            {components[name].icon}
          </div>
          <div className="text-center leading-relaxed">
            <h4 className="text-2xl font-bold">Add to {name}</h4>
            <p className="text-gray-400">Minimum version {version}</p>
          </div>
        </div>
        <div className="grid gap-5 mx-auto pb-4 text-center items-center">
          <Dots />
          <BaseButton
            url="https://www.google.com/intl/zh-TW/chrome"
            fill
          >Add & Install Extension</BaseButton>
        </div>
      </div>
    </div>
  )
}

export default BrowserCard