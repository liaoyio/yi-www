import { COMPONENTS } from '@components/pages/ui-snippets/lab/components'
import { cva, type VariantProps } from 'class-variance-authority'

const componentPlaygroundCva = cva(
  'min-h-[200px] overflow-hidden relative rounded-md border border-neutral-800 p-8 mt-10',
  {
    variants: {
      isCentered: {
        true: 'flex items-center justify-center'
      }
    }
  }
)

export type ComponentPlaygroundProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof componentPlaygroundCva> & { name: string }

const ComponentPlayground: React.FC<ComponentPlaygroundProps> = ({
  children,
  isCentered,
  name,
  className
}) => {
  const currentComponentData = COMPONENTS.find((component) => component.slug === name)
  // import { TWCONFIG } from '@components/pages/ui-snippets/lab/components'
  // const twConfig = JSON.stringify(TWCONFIG[name], null, 2)

  /*   const ds = () => {
    const obj = {}
    COMPONENTS.forEach((it) => {
      obj[it.slug] = {
        title: it.name,
        theme: {
          toc: false,
          layout: 'full'
        }
      }
    })
    return obj
  }
  console.log(JSON.stringify(ds(), null, 2)) */
  return (
    <>
      <div className={componentPlaygroundCva({ isCentered, className })}>
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#b1b1b12e_1px,transparent_1px),linear-gradient(to_bottom,#b1b1b12e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        <div className="z-0">{name && <currentComponentData.component />}</div>
      </div>
      {/* code */}
      <div className={children ? 'mt-8 py-4' : ''}>{children}</div>
    </>
  )
}

export default ComponentPlayground
