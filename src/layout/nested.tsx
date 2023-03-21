import type { PropsWithChildren } from "react"

const NestedLayout = ({children}: PropsWithChildren) => {
  return (
    <div className="w-11/12 h-[50vh] align-center flex flex-col nested-layout border">
      <header className="flex flex-center bg-red-500 p-4">header</header>
      <main className="flex-auto">
        {children}
      </main>
      <footer className="flex-center shrink-0 bg-red-500 p-4">footer</footer>
  </div>
  )
}

export default NestedLayout