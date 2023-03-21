import { lazy } from "react";
import BlockLayout from "src/layout/block-layout";
import Desc from "./components/Desc";
import Title from "./components/Title";

const Tabs = lazy(() => import("@/components/tabs/Tabs"));

const Features = () => {
  const tabsList = ['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing']
  return (
    <>
      <BlockLayout id="block-features">
        <Title
          title="Features"
          customClass="xl:w-full"
        />
        <br />
        <Desc
          desc="Our aim is to make it quick and easy for you to access your favourite websites. Your Bookmarks sync between
          your devices so you can access them on the go."
          customClass="xl:mx-auto xl:w-7/12 xl:text-center"
        />
      </BlockLayout>

      <Tabs tabsList={tabsList} />
    </>
  )
}

export default Features