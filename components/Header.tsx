import { useEffect, useState } from "react";

const navigation = [
  { name: "Harga Domba", href: "#harga-domba" },
  { name: "Harga Sapi", href: "#harga-sapi" },
  { name: "FAQ", href: "#faq" },
  { name: "Gallery", href: "#gallery" },
];

export default function Header() {
  const [show, setShow] = useState(false);
  const [showShadow, setShowShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY == 0) {
        setShowShadow(false);
      } else {
        setShowShadow(true);
      }

      if (window.scrollY < lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`bg-cream backdrop-blur transition duration-300 fixed z-50 w-screen top-0 ${show && "-translate-y-40"} ${
        showShadow && "shadow-lg"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-center lg:justify-between border-b border-cream py-6 lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <div className="flex">
                <span className="sr-only">QURBAN KUY!</span>
                <img
                  className="h-10 w-auto"
                  src="/svgs/sheep-2-svgrepo-com.svg"
                  alt="Qurban Kuy Logo"
                />
                <h1 className="text-choco font-fredoka font-semibold text-2xl px-8">
                  QURBAN KUY!
                </h1>
              </div>
            </a>
          </div>
          <div className="ml-10 hidden space-x-8 lg:block">
            {navigation.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-medium text-choco hover:text-choco/60"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 pb-4 -mt-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-choco hover:text-choco/60"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
