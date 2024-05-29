import { IconProps } from '@qwikest/icons'
import { FlArrowDownSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconArrowDownSolid = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
      <QwikestIcon class={classNames} {...props} />
  )
})