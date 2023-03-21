import type { PropsWithChildren } from 'react'
import ArtcleBlock from 'src/page-block/components/ArtcleBlock'
import BaseButton from '../BaseButton'
import OverlapImage from '../OverlapImage'

interface TabProps extends PropsWithChildren {
  tabname: string
  tabIndex: number
}

const TabContent = ({tabname, tabIndex}: TabProps) => {
  return (
    <>
      <div className="
        grid
        grid-cols-1
        py-4
        xl:py-14
        xl:grid-cols-2
      ">
        <div className='
          w-11/12
          mx-auto
          pt-16
          order-2
          xl:w-full
          xl:h-full
          xl:order-2
        '>
          <ArtcleBlock
            title={`${tabname} in one click`}
            desc="Organize your booksmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
          >
            <BaseButton fill url="https://tailwindcss.com/">More Info</BaseButton>
          </ArtcleBlock>
        </div>

        <div className='
          mx-auto
          order-1
          pt-8
          md:pt-14
          md:h-[500px]
          xl:h-full
          xl:pt-0
          xl:order-1
          xl:w-full
        '>
          <OverlapImage
            imgName={`tab-${tabIndex}`}
            position="left"
          />
        </div>
      </div>
    </>
  )
}

export default TabContent