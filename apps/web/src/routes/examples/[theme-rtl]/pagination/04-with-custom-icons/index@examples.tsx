/**
 * title: Pagination with custom icons
 * description: Add custom icons to the pagination component by passing the showIcons prop and no labels.
 */

import { component$, useSignal } from '@builder.io/qwik'
import { staticGenerateHandler } from '~/routes/examples/[theme-rtl]/layout'
import { StaticGenerateHandler } from '@builder.io/qwik-city'
import { Pagination } from 'flowbite-qwik'
import { IconArrowLeftSolid, IconArrowRightSolid } from 'flowbite-qwik-icons'

export default component$(() => {
  const currentPage = useSignal(1)

  return (
    <>
      <div class="p-3 flex text-center gap-3">
        <Pagination totalPages={100} currentPage={currentPage} showIcons nextIcon={IconArrowRightSolid} previousIcon={IconArrowLeftSolid} />
      </div>
    </>
  )
})

export const onStaticGenerate: StaticGenerateHandler = async () => {
  return staticGenerateHandler()
}
