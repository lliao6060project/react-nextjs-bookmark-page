import { lazy } from "react";
import Head from 'next/head';
import BaseLayout from "src/layout/base";
import Intro from "src/page-block/intro";

const Features = lazy(() => import("src/page-block/features"));
const Pricing = lazy(() => import("src/page-block/pricing"));
const Contact = lazy(() => import("src/page-block/contact"));

const Home = () => {
  // console.log(process.env.NODE_ENV)
  return (
    <>
      <Head>
        <title>Bookmark</title>
        <meta property="og:title" content="Bookmark" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BaseLayout>
        {/* <Image
          src="/images/fake_user.jpeg"
          alt="fake_user as logo"
          width={200}
          height={200}
          priority
        /> */}
        <div className="overflow-hidden">
          <Intro />
          <Features />
          <Pricing />
          <Contact />
        </div>
      </BaseLayout>
    </>
  )
}

export default Home