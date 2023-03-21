import BlockLayout from "src/layout/block-layout"
import Desc from "./components/Desc"
import Title from "./components/Title"

const Contact = () => {
  return (
    <>
      <BlockLayout
        id="block-contact"
        customClass="min-h-screen border"
      >
        <Title
          title="Frequently Asked Questions"
          customClass="xl:w-full"
        />
        <br />
        <Desc
          desc="Here are some of our FAQs. if you have any other questions you'd like answered please feel free to email us."
          customClass="xl:mx-auto xl:w-7/12 xl:text-center"
        />
      </BlockLayout>
    </>
  )
}

export default Contact