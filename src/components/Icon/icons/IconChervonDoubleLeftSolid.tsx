import { IconProps } from '@qwikest/icons'
import { FlChervonDoubleLeftSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconChervonDoubleLeftSolid = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
      <QwikestIcon class={classNames} {...props} />
  )
})