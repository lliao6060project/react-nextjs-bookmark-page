import { ReactElement } from "react";
import BaseLayout from "src/layout/base";
import NestedLayout from "src/layout/nested";
import type { NextPageWithLayout } from './_app';


const Nested: NextPageWithLayout = () => {
  return (
    <h1 className="text-3xl font-bold underline text-blue-300 align-center">
      Hello world!
    </h1>
  )
}

Nested.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      <NestedLayout>{page}</NestedLayout>
    </BaseLayout>
  )
}

export default Nested