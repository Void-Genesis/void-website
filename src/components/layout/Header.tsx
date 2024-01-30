'use client'
import Link from 'next/link';

export default function Header() {

  const handleMouseMove = (e: { currentTarget: any; clientX: number; clientY: number; }) => {
    const nav = e.currentTarget;
    const { left, top } = nav.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    nav.style.setProperty('--mouse-x', `${x}px`);
    nav.style.setProperty('--mouse-y', `${y}px`);
  };


  return (
    <>
      <nav className="flex flex-row justify-between bg-[rgba(19,20,24,0.88)] transition-all duration-300 hover:bg-[#131418] backdrop-filter backdrop-blur-lg p-6 border-b-[1px] border-void-grey-400 lg:mx-96 lg:rounded-[4px] lg:border lg:border-void-grey-400 lg:py-4 lg:mt-6 lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-10">
        <div className='flex flex-row items-center justify-center gap-[18px]'>
          <Link href="/">
            <img className="h-6 lg:h-8 max-h-8" src="/logo-void-genesis-white.svg" alt="Void Genesis" />
          </Link>
        </div>

        <div className='lg:flex lg:flex-row lg:w-full lg:justify-center lg:items-center lg:gap-8 font-heebo text-base font-normal leading-[120%] tracking-[0.16px] text-void-white-400'>
          <Link href="/">Home</Link>
          <Link href="/">Sobre nós</Link>
          <Link href="/">Nossas soluções</Link>
          <Link href="/">Sucessos</Link>
        </div>

        <div className='lg:hidden'>
          <img className="w-6 h-6" src="/icon-menu.svg" alt="Menu" />
        </div>

      </nav>

      <img className="hidden lg:absolute lg:flex -z-50 top-0 right-0" src="/image-background.png" alt="Void Genesis" />
    </>


  );
}
