/* This example requires Tailwind CSS v3.0+ */
export default function CallToAction() {
  return (
    <div className="bg-white">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            Ayo pesan sekarang.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Dapatkan potongan harga senilai 100 ribu rupiah untuk pemesanan sebelum tanggal 8 Juni 2023 
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://linktr.ee/qurban35"
              className="rounded-md bg-choco px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-choco/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
