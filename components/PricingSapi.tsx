const tiers = [
  {
    name: "Sapi Small",
    href: "#",
    size: "text-4xl",
    weight: "±300KG",
    price: "23.1 juta/ekor",
    best: false,
  },
  {
    name: "Sapi Medium",
    href: "#",
    size: "text-5xl",
    weight: "±390KG",
    price: "28 juta/ekor",
    best: true,
  },
  {
    name: "Sapi Large",
    href: "#",
    size: "text-6xl",
    weight: "±480KG",
    price: "33.6 juta/ekor",
    best: false,
  },
];

export default function PricingSapi() {
  return (
    <div className="bg-white" id="harga-sapi">
      <div className="px-6 pt-12 lg:px-8 lg:pt-20">
        <div className="text-center">
          {/* <h2 className="text-xl font-semibold leading-6 text-gray-300">
            Pricing
          </h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-choco sm:text-4xl lg:text-5xl">
            Price List Sapi
          </p>
          <p className="mx-auto mt-3 max-w-4xl text-xl text-choco/80 sm:mt-5 sm:text-2xl">
            Pilih Sapi Qurban sesuai yang kamu inginkan
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-white lg:h-2/3" />
          <div className="mx-auto max-w-7xl px-10 lg:px-8">
            <div className="relative mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:mx-auto lg:max-w-4xl">
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className="divide-y divide-gray-200 max-w-md rounded-3xl border-black border-4 shadow-sm bg-white"
                >
                  <div className="p-2 h-80 lg:h-[420px] flex items-center justify-center">
                    <h2
                      className={`font-fredoka font-semibold uppercase text-center [word-spacing:999px] ${tier.size}`}
                    >
                      {tier.name}
                    </h2>
                  </div>
                  <div className="relative border-none">
                    <div className="absolute bottom-5 right-10 font-blogger text-xl lg:text-3xl">
                      {tier.weight}
                    </div>
                  </div>
                  <div className="relative border-none">
                    <div className="absolute bottom-5 left-5 text-center font-monts font-semibold text-xl lg:text-2xl">
                      {tier.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
