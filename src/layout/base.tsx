import Footer from '@/components/footer/Footer'
import Navbar from "@/components/navbar/Navbar"
import type { PropsWithChildren } from "react"

const navList = ['FEATURES', 'PRICING', 'CONTACT', 'LOGIN']

const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar navList={navList} />
      <main className="
        w-full
        p-4
        mx-auto
        flex-auto
        my-32
        md:w-11/12
        2xl:w-10/12
      ">
        {children}
      </main>
      <Footer navList={navList} />
    </div>
  )
}

export default Layout