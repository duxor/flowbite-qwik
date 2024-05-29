import { IconProps } from '@qwikest/icons'
import { FlClipboardSolid as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconClipboardSolid = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
      <QwikestIcon class={classNames} {...props} />
  )
})