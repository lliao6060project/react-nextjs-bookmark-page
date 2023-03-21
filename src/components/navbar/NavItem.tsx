import type { PropsWithChildren } from "react"
import { Link } from 'react-scroll'

interface NavItemProps extends PropsWithChildren {
  navList: string[]
  openMobileMenu: () => void
}

const NavItem = ({openMobileMenu, ...props}: NavItemProps) => {
  const { navList } = props
  return (
    <>
      <div>
        <ul className="
          hidden
          lg:grid
          lg:grid-cols-4
          lg:gap-5
        ">
          {
            navList.map((navItem, i) => {
              return (
              <li
                key={`${navItem}-${i}`}
                className="
                  flex-center
                  cursor-pointer
                  [&:not(:last-child)]:hover:text-softRed
                  p-2
                  font-bold
                  last:border-2
                  last:border-[#fb5353]
                  last:bg-softRed
                  last:rounded-md
                  last:text-white
                  last:shadow-md
                  last:shadow-indigo-400/50
                  last:hover:bg-white
                  last:hover:text-softRed
                ">
                  <Link
                    activeClass='nav-item-active'
                    to={`block-${navItem.toLocaleLowerCase()}`}
                    offset={-120}
                    spy={true}
                    duration={500}
                    className="h-full flex-center"
                  >
                    {navItem}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        {/* hamburger */}
        <div className="
            h-full
            flex
            items-center
            justify-end
            cursor-pointer
            lg:hidden
          "
          onClick={openMobileMenu}
        >
          <div className="flex-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15"><path fill="#242A45" fillRule="evenodd" d="M0 0h18v3H0V0zm0 6h18v3H0V6zm0 6h18v3H0v-3z"/></svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavItem