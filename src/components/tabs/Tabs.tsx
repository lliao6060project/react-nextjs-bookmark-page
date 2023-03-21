import type { MouseEvent, PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'
import TabContent from './TabContent'

interface TabProps extends PropsWithChildren {
  tabsList: Array<string>
  activeTab?: (tabname: string) => void
}

const Tab = ({ children, tabsList }: TabProps) => {
  const [currentTab, setCurrentTab] = useState('')
  const [currentTabIndex, setCurrentTabIndex] = useState(1)
  const activeClass = `active transtion ease-in duration-200 border-red-400 font-bold border-b-4`

  const handleChangeTab = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, tabName: string, index: number) => {
    setCurrentTab(tabName)
    setCurrentTabIndex(index+1)
  }

  useEffect(() => {
    setCurrentTab(tabsList[0])
  }, [tabsList])
  return (
    <>
      <div className="tabs">
        <ul className="w-9/12 mx-auto grid grid-cols-1 xl:grid-cols-3 border-b">
          {
            tabsList.map((tab, i) => {
              return (
                <li
                  key={`${tab}-${i}`}
                  className={`
                    w-full
                    h-full
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    p-4
                    text-lg
                    [&:not(.active)]:hover:text-red-400
                    ${tab === currentTab ? activeClass : ''}
                  `}
                  onClick={(e) => handleChangeTab(e, tab, i)}
                >{tab}</li>
              )
            })
          }
        </ul>
        <TabContent
          tabname={currentTab}
          tabIndex={currentTabIndex}
        />
      </div>
    </>
  )
}

export default Tab