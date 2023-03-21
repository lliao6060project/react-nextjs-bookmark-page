import { lazy, PropsWithChildren, useState } from "react";
import BookMarkLogo from "../svg/BookMarkLogo";
import NavItem from "./NavItem";

const MobileMenu = lazy(() => import('./MobileMenu'));

interface NavbarProps extends PropsWithChildren {
  navList: string[]
}

const Navbar = ({navList}: NavbarProps) => {
  const [menuOpen, setMenuOepn] = useState(false)
  const handleOpenMobileMenu = () => {
    setMenuOepn(true)
  }
  return (
    <>
      <header className="
        fixed
        w-screen
        h-28
        flex
        items-center
        p-4
        border-b
        bg-white
        z-[9999]
      ">
        <nav className="
          w-full
          grid
          grid-cols-2
          mx-auto
          md:w-11/12
          xl:grid-cols-3
          2xl:w-10/12
        ">
          {/* logo */}
          <div
            className="xl:col-span-2 py-4 flex items-center"
            onClick={() => window.scrollTo(0, 0)}
          >
            <span className="cursor-pointer">
              <BookMarkLogo color="#000" />
            </span>
          </div>
          <NavItem
            navList={navList}
            openMobileMenu={handleOpenMobileMenu}
          />
        </nav>
        <MobileMenu
          navList={navList}
          openMenu={menuOpen}
          closeMenu={() => setMenuOepn(false)}
        />
      </header>
    </>
  )
}

export default Navbar