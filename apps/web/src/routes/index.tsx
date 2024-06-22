import { component$ } from '@builder.io/qwik'
import { DocFooter } from '~/components/Footer/Footer'
import { Button, Card, Heading, Jumbotron } from 'flowbite-qwik'
import { IconArrowRightOutline } from 'flowbite-qwik-icons'

export default component$(() => {
  const boxes = [
    {
      title: 'Qwik components 🧱',
      text: 'Use dozen of open-source components such as navbars, modals, and dropdowns based on Qwik and Tailwind CSS.',
    },
    {
      title: 'Based on Tailwind CSS 💨',
      text: 'The components are based on the utility classes from Tailwind CSS and you can use them to further customize the interface.',
    },
    {
      title: 'Powered by Flowbite 🚀',
      text: 'The Flowbite Qwik library is based on the original Flowbite component library using vanilla JavaScript.',
    },
    {
      title: 'Open-source community ❤️',
      text: 'Thousands of developers actively use the components from Flowbite Qwik to power their applications.',
    },
  ]

  return (
    <div class="flex flex-col h-full">
      <Jumbotron>
        <Jumbotron.Heading tag="h1">
          <span class="text-qwik">⚡ Flowbite Qwik </span> <span class="text-qwik-secondary">component library</span> based on Tailwind CSS
        </Jumbotron.Heading>
        <Jumbotron.SubText tag="h2">
          Get started with the most popular open-source library of interactive UI components built with the utility classes from Tailwind CSS
        </Jumbotron.SubText>
        <div class="flex gap-2 justify-center">
          <Button href="/docs/getting-started/introduction" suffix={IconArrowRightOutline}>
            Get started
          </Button>
          <Button color="alternative" href="https://github.com/qwikerx/flowbite-qwik">
            View on GitHub
          </Button>
        </div>
      </Jumbotron>

      <section class="flex-1">
        <div class="grid p-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mx-auto max-w-6xl">
          {boxes.map((box) => (
            <Card>
              <Heading tag="h3">{box.title}</Heading>
              <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{box.text}</p>
            </Card>
          ))}
        </div>
      </section>
      <DocFooter class="mt-16" />
    </div>
  )
})

export const head = () => ({
  title: 'Flowbite Qwik - UI Component Library',
  meta: [{ name: 'description', content: '⚡ Flowbite Qwik, component library based on Tailwind CSS' }],
})
