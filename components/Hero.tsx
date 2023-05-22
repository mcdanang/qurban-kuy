import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="https://www.instagram.com/qurban_kuyy/" target='_blank' className="inline-flex space-x-6">
              <span className="rounded-full bg-cream/70 px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-indigo-600/10">
                Check our instagram
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-choco">
                <span className='font-bold'>@qurban_kuyy</span>
                <ChevronRightIcon className="h-5 w-5 text-choco" aria-hidden="true" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-choco sm:text-6xl">
            Kuy pesan hewan qurban untuk Idul Adha 2023
          </h1>
          <p className="mt-6 text-lg leading-8 text-black">
            Dapatkan potongan harga senilai 100 ribu rupiah untuk pemesanan sebelum tanggal 8 Juni 2023
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://linktr.ee/qurban35"
              className="rounded-md bg-choco px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Pesan sekarang
            </a>
            <a href="#" className="text-base font-semibold leading-7 text-gray-900">
              Learn more <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="-m-2 rounded-xl bg-cream/90 p-2 ring-1 ring-inset ring-cream lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/images/qurban-2023.jpg"
                alt="App screenshot"
                width={1000}
                height={1000}
                className="w-[40rem] rounded-md shadow-2xl ring-1 ring-cream/10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
