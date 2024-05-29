import { IconProps } from '@qwikest/icons'
import { FlFileShieldOutline as QwikestIcon } from '@qwikest/icons/flowbite'
import { component$ } from '@builder.io/qwik'

export const IconFileShieldOutline = component$<IconProps>(({ class: classNames, ...props }) => {
  return (
      <QwikestIcon class={classNames} {...props} />
  )
})