/* This example requires Tailwind CSS v3.0+ */
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Bagaimana cara melakukan order hewan qurban?",
    answer: `
      Akad yang digunakan adalah Akad Salam.
      Silahkan pilih kategori hewan yang akan dipesan lalu hubungi kami untuk melaksanakan pembayaran cash di muka.
      Kami akan siapkan hewan sesuai pesanan anda dan hewan akan dikirim pada H-1 Idul Adha.
      Jika hingga H-1 hewan masih belum dikirim, anda berhak membatalkan transaksi (uang kembali) atau memberi waktu lebih untuk kami siapkan hewan di hari H pagi.
      `,
  },
  {
    question: "Apakah bisa dibantu disembelih dan disalurkan hasil qurbannya?",
    answer: `
      Kami menyarankan agar anda menyembelih sendiri hewan qurban anda karena itu paling afdhol. 
      Atau anda saksikan sendiri secara langsung penyembelihan hewan qurban anda. 
      Jika tidak, kami juga dapat membantu anda untuk mencari lokasi untuk penyembelihan hewan qurban anda (info lokasi disampaikan lebih lanjut).
      `,
  },
];

export default function FAQ() {
  return (
    <div className="bg-cream" id="faq">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-black/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-black">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-black/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-black">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-black/60">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
