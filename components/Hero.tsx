import dynamic from "next/dynamic";

const DynamicCountdown = dynamic(() => import("./Countdown"), {
  ssr: false,
});

import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

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
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a
              href="https://www.instagram.com/qurban_kuyy/"
              target="_blank"
              className="inline-flex space-x-6"
            >
              <span className="rounded-full bg-cream/70 px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-indigo-600/10">
                Check our instagram
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-choco">
                {/* <span className="font-bold">@qurban_kuyy</span> */}
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 text-choco"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <ChevronRightIcon
                  className="h-5 w-5 text-choco"
                  aria-hidden="true"
                />
              </span>
            </a>
          </div>

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-choco sm:text-6xl">
            Kuy pesan hewan qurban untuk Idul Adha 2023
          </h1>
          <DynamicCountdown />
          <p className="mt-6 text-lg leading-8 text-black">
            Dapatkan potongan harga senilai 100 ribu rupiah untuk pemesanan
            sebelum tanggal 8 Juni 2023
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="https://linktr.ee/qurban35"
              className="rounded-md bg-choco px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Pesan sekarang
            </a>
            <a
              href="#features"
              className="text-base font-semibold leading-7 text-gray-900"
            >
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
  );
}
