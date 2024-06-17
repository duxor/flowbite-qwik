/**
 * title: Table data navigation with icons
 * description: Show icons for the next and previous control buttons for table navigation by passing the showIcons prop.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Pagination } from 'flowbite-qwik'

export default component$(() => {
  const currentPage = useSignal(1)

  return (
    <>
      <div class="p-3 flex text-center gap-3">
        <Pagination layout="table" totalPages={100} currentPage={currentPage} />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
