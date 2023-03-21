import BookMarkLogo from '@/components/svg/BookMarkLogo'
import type { PropsWithChildren } from "react"
import { Link } from 'react-scroll'
import HoverIcon from "../HoverIcon"

interface FooterBottomBarProps extends PropsWithChildren {
  navList: string[]
}

const FooterBottomBar = ({ navList }: FooterBottomBarProps) => {
  return (
    <div className="py-12 bg-darkDesaturatedBlue text-white xl:py-8">
      <div className="
        w-full
        space-y-10
        mx-auto
        xl:w-10/12
        xl:grid
        xl:grid-cols-3
        xl:space-y-0
      ">
        {/* left */}
        <div className="
          space-y-10
          xl:col-span-2
          xl:flex
          xl:gap-10
          xl:space-y-0
        ">
          <div className="w-full flex-center xl:w-48">
            <BookMarkLogo color="#FFF"/>
          </div>
          <div className="
            space-y-8
            tracking-[.1em]
            xl:w-1/3
            xl:flex
            xl:justify-between
            xl:space-y-0
          ">
            {
              navList.slice(0, 3).map((item, i) => {
                return (
                  <Link
                    key={`${item}-${i}`}
                    to={`block-${item.toLocaleLowerCase()}`}
                    offset={-120}
                    spy={true}
                    duration={500}
                    className="
                      flex-center
                      cursor-pointer
                      hover:text-softRed
                      xl:text-sm
                    "
                  >
                    {item}
                  </Link>
                )
              })
            }
          </div>
        </div>
        {/* right */}
        <div className="flex-center xl:justify-end space-x-10">
          <HoverIcon name="fb" />
          <HoverIcon name="twitter" />
        </div>
      </div>
    </div>
  )
}

export default FooterBottomBar