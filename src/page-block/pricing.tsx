import BlockLayout from "src/layout/block-layout"
import Desc from "./components/Desc"
import Title from "./components/Title"

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
      </BlockLayout>
    </>
  )
}

export default Pricing