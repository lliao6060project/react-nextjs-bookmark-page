import type { PropsWithChildren } from "react"
import FooterBottomBar from "./FooterBottomBar"

interface FooterProps extends PropsWithChildren {
  navList: string[]
}


/* eslint-disable react/no-unescaped-entities */
const Footer = ({ navList }: FooterProps) => {
  return (
    <footer className="shrink-0 bg-indigo-500">
      <div className="
        w-11/12
        grid
        pt-20
        pb-14
        gap-3
        mx-auto
        text-white
        sm:w-10/12
        xl:grid-rows-3
        xl:w-3/5
        xl:py-14
        2xl:w-2/5
      ">
        <div className="
          space-y-10
          mb-5
          row-span-2
          mx-auto
          xl:mb-0
        ">
          <p className="text-sm text-center tracking-[.35em]">35,000+ ALREADY JOINED</p>
          <div className="
            text-2xl
            font-bold
            tracking-wide
            text-center
            space-y-1
            md:text-3xl
            xl:text-4xl
          ">
            <p>Stay up-to-date with what</p>
            <p className="text-center">we're doing</p>
          </div>
        </div>
        <div className="
          w-full
          mx-auto
          grid
          gap-5
          md:w-3/5
          xl:grid-cols-3
          2xl:w-3/5
        ">
          <div className="
            border-2
            border-softRed
            bg-softRed
            text-black
            rounded-md
            xl:col-span-2
          ">
            <p className="
              flex
              items-center
              justify-between
              h-[52px]
              px-4
              py-3
              bg-white
              rounded-md
            ">
              <span>example@email/com</span>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg>
              </span>
            </p>
            <p className="h-[28px] text-xs text-white italic">
              <span className="w-full h-full flex items-center justify-start px-4">Whoops, make sure it's an email</span>
            </p>
          </div>
          <div className="
            h-[52px]
            border-2
            border-softRed
            bg-softRed
            rounded-md
            cursor-pointer
            hover:bg-white
            hover:text-softRed
          ">
            <p className="w-full h-full flex-center text-center font-bold">Contact Us</p>
          </div>
        </div>
      </div>
      <FooterBottomBar navList={navList}/>
    </footer>
  )
}

export default Footer