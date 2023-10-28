import Image from 'next/image'
import type { FC } from 'react'

import avatar from '@public/images/avatar.png'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type FiveoutofnineAvatarProps = {
  className?: string
  size?: number
}

const YiAvatar: FC<FiveoutofnineAvatarProps> = ({ className, size = 40 }) => {
  return (
    <Image
      className={clsx(twMerge('my-0 rounded-full border border-gray-6', className))}
      width={size}
      height={size}
      src={avatar}
      alt="5/9 avatar"
    />
  )
}

YiAvatar.displayName = 'YiAvatar'

export default YiAvatar
