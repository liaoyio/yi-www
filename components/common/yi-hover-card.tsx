import YiAvatar from './yi-avatar'
import { HoverCard } from '@components/ui'

export const YiHoverCard = ({ trigger }) => {
  return (
    <HoverCard
      className="flex flex-col p-4"
      side="top"
      trigger={trigger}
      inverted={false}
      hasArrow={false}
    >
      <a
        className="w-fit hover:brightness-75"
        href="https://liaoyio.github.io/notes/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <YiAvatar size={56} />
      </a>
      <a
        className="mt-2 text-base font-medium text-gray-12 no-underline hover:underline"
        href="https://liaoyio.github.io/notes/"
        target="_blank"
        rel="noreferrer noopener"
        children="Yi 🌊"
      />
      <div className="text-sm text-gray-11" children="@Liaoyi" />
      <div className="my-2 text-sm text-gray-12" children="five divided by nine" />
      <div className="flex space-x-4">
        <a
          className="text-sm font-normal text-gray-11 no-underline hover:underline"
          href="https://liaoyio.github.io/notes"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="font-medium text-gray-12" children="002 " />
          <span children="Following" />
        </a>
        <a
          className="text-sm font-normal text-gray-11 no-underline hover:underline"
          href="https://liaoyio.github.io/notes/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <span className="font-medium text-gray-12" children="00001" />
          <span children="Followers" />
        </a>
      </div>
    </HoverCard>
  )
}

export default YiHoverCard
