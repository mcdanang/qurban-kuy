import Image from "next/image";

const features = [
  {
    name: "Domba",
    description:
      "Kami menyediakan domba jenis Priangan, Garut, Lokal, atau menyesuaikan ketersediaan.",
    svg: "/svgs/sheep.svg",
  },
  {
    name: "Sapi",
    description:
      "Kami menyediakan sapi jenis Limosin, Simental, Pegon, Peranakan Ongole, Bali, atau menyesuaikan ketersediaan.",
    svg: "/svgs/cow.svg",
  },
  {
    name: "Gratis Ongkir",
    description:
      "Harga hewan sudah termasuk gratis ongkir untuk wilayah kota Jabodetabek. Di luar itu, akan ada biaya tambahan.",
    svg: "/svgs/truck.svg",
  },
  {
    name: "Titip Salur",
    description:
      "Kami dapat membantu anda untuk mencari lokasi untuk penyembelihan hewan qurban anda, tetapi menyembelih sendiri hewan qurban itu paling afdhol",
    svg: "/svgs/phone.svg",
  },
];

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-choco">
            Qurban lebih mudah
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kami siap menyediakan hewan qurban terbaik dengan gratis ongkir
            untuk wilayah Jabodetabek
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Tidak perlu lagi repot mengurus pembelian hewan qurban, cukup pesan
            via Whatsapp/Instagram dan akan kami antarkan hewan qurban sesuai
            pesanan ke depan rumah anda pada H-1 Idul Adha 2023
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-choco">
                    <Image
                      src={feature.svg}
                      alt="App screenshot"
                      width={50}
                      height={50}
                      className="w-[1.6rem]"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
