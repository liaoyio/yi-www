import Header from './header'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto  max-w-7xl flex-1 items-center  justify-center">
        <div className="mt-40 items-center justify-between sm:mt-32 md:flex">
          <div>
            <div className=" mx-auto mb-3 flex h-7 w-fit items-center rounded-md bg-[#3a1703] px-2 sm:ml-0">
              <p className="text-sm text-[#f56324]">Currently in private beta</p>
            </div>

            <div className="">
              {/*if light: bg-gradient-to-br from-black to-neutral-600 */}
              <h1 className=" bg-gradient-to-r from-white to-neutral-800 bg-clip-text  text-center text-5xl font-bold text-transparent sm:text-left sm:text-5xl md:max-w-2xl xl:text-7xl/none ">
                The new email <br /> API for developers
              </h1>

              <div className="px-4 text-neutral-600 lg:px-0 ">
                <p className="mt-6 max-w-xl text-center sm:text-left">
                  Build, test and, and send transactional emails at scale. Resend provides the best
                  developer experience helping you reach users instead of spam folders{' '}
                </p>
                <div className="mt-4">
                  <h1 className="text-center sm:text-left">
                    Press{' '}
                    <span className="rounded-md border border-neutral-600 bg-neutral-800  px-1 text-sm ">
                      A
                    </span>{' '}
                    to request access
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div>
            <video
              loop
              muted
              className="aspect-square hidden bg-transparent md:block"
              src="//cube.mp4"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 mb-10 w-full justify-center text-center lg:text-left">
        <div className=" mx-auto max-w-7xl ">
          <div className=" flex items-center justify-center gap-x-3 md:justify-start  ">
            <Github size={20} className="text-neutral-500" />
            <Twitter size={20} className="text-neutral-500" />
            <Linkedin size={20} className="text-neutral-500" />
          </div>

          <div className="mt-3 flex flex-col items-center justify-between text-neutral-500 md:flex-row">
            <p>
              3442 Market Street #39485 <br /> New york, NY 23072
            </p>
            <div className="flex gap-x-4 font-semibold">
              <span>Privacy Policy</span>
              <span>Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>{`
        body {
          background-color: black;
          font-feature-settings:
            'rlig' 1,
            'calt' 1;
        }
        @layer utilities {
          .bg-nav {
            background-image: radial-gradient(
              100px at calc(var(--mouse-x) * 1px) calc(var(--mouse-y) * 1px),
              rgba(255, 255, 255, 0.95),
              rgba(255, 255, 255, 0.3)
            );
          }
        }
      `}</style>
    </>
  )
}
