import BlockLayout from "src/layout/block-layout"
import Desc from "./components/Desc"
import Title from "./components/Title"
import BrowserCard from "./components/BrowserCard"

const Pricing = () => {
  return (
    <>
      <BlockLayout
        id="block-pricing"
        customClass="min-h-screen border"
      >
        <Title
          title="Download the extension"
          customClass="xl:w-full"
        />
        <br />
        <Desc
          desc="We've got more browsers in the popeline. Please do let us know if you've got a favourite you-d like us to prioritize."
          customClass="xl:mx-auto xl:w-7/12 xl:text-center"
        />

        <div className="
          relative
          w-9/12
          mx-auto
          grid
          gap-10
          mt-20
          xl:grid-cols-3
        ">
          <BrowserCard
            name="Chrome"
            version={62}
          />

          <BrowserCard
            name="Firefox"
            version={55}
            offset={10}
          />

          <BrowserCard
            name="Opera"
            version={46}
            offset={20}
          />

        </div>

      </BlockLayout>
    </>
  )
}

export default Pricing