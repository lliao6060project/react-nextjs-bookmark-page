import BaseButton from "@/components/BaseButton"
import OverlapImage from "@/components/OverlapImage"
import ArtcleBlock from "./components/ArtcleBlock"

const Feature = () => {
  return (
    <>
      <div
        className="
          mb-5
          py-4
          grid
          grid-cols-1
          xl:py-14
          xl:grid-cols-2
        ">
        <div className='
          pt-16
          order-2
          h-full
          space-y-5
          xl:order-1
        '>
          <ArtcleBlock
            title="A Smiple Bookmark Manager"
            desc="A clean and simple interface to organize your favourite websites. Open a new broser tab and see your sites load instantly.
            Try it for free."
          >
            <BaseButton
              url="https://www.google.com/intl/zh-TW/chrome"
              fill
            >Get it on Chrome</BaseButton>
            <BaseButton url="https://www.mozilla.org/zh-TW/firefox/new/">Get it on Firefox</BaseButton>
          </ArtcleBlock>
        </div>
        <div className='
          mx-auto
          order-1
          w-full
          h-64
          md:h-[500px]
          xl:h-full
          xl:order-2
        '>
          <OverlapImage
            imgName="section-1"
            position="right"
          />
        </div>
      </div>
    </>
  )
}

export default Feature