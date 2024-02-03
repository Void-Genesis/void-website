import Link from "next/link";

export default function Header() {
  return (
    <>
      <nav className="flex flex-row justify-between bg-[rgba(19,20,24,0.88)] transition-all duration-300 hover:bg-[#131418] backdrop-filter backdrop-blur p-6 border-b-[1px] border-void-grey-400 lg:mx-96 lg:rounded-[4px] lg:border lg:border-void-grey-400 lg:py-0 lg:px-6 lg:mt-6 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-50 xl:max-w-[540px] xl:mx-auto">
        <div className="flex flex-row items-center justify-center gap-[18px] lg:pr-2">
          <Link href="/">
            <img
              className="h-6 lg:h-6 max-h-6"
              src="/logo-void-genesis-white.svg"
              alt="Void Genesis"
            />
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-row lg:w-full lg:justify-center lg:items-center lg:gap-4 font-heebo text-sm font-normal leading-[120%] tracking-[0.16px] text-void-white-400">
          <Link
            href="/"
            className="py-5 px-2 border-b border-transparent hover:text-void-white hover:border-b hover:border-void-blue transition-border"
          >
            Home
          </Link>
          <Link
            href="/"
            className="py-5 px-2 border-b border-transparent hover:text-void-white hover:border-b hover:border-void-blue transition-border"
          >
            Sobre nós
          </Link>
          <Link
            href="/"
            className="py-5 px-2 border-b border-transparent hover:text-void-white hover:border-b hover:border-void-blue transition-border"
          >
            Nossas soluções
          </Link>
          <Link
            href="/"
            className="py-5 px-2 border-b border-transparent hover:text-void-white hover:border-b hover:border-void-blue transition-border"
          >
            Sucessos
          </Link>
        </div>

        <div className="lg:hidden">
          <img className="w-6 h-6" src="/icon-menu.svg" alt="Menu" />
        </div>
      </nav>

      <img
        className="hidden lg:absolute lg:flex -z-50 top-0 right-0"
        src="/image-background.png"
        alt="Void Genesis"
      />
    </>
  );
}
