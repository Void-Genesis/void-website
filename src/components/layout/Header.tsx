import Link from 'next/link';

export default function Header() {
    return (
        <nav className="flex flex-row justify-between bg-[#131418] p-6 border-b-[1px] border-void-grey-400 lg:mx-96 lg:rounded-[4px] lg:border lg:border-void-grey-400 lg:py-4 lg:mt-6">
            <div className='flex flex-row items-center justify-center gap-[18px]'>
                <Link href="/">
                    <img className="h-6 lg:h-8" src="/logo-void-genesis-white.svg" alt="Void Genesis" />
                </Link>
            </div>

            <div className='hidden lg:flex lg:flex-row lg:w-full lg:justify-center lg:items-center lg:gap-8 font-heebo text-base font-normal leading-[120%] tracking-[0.16px] text-void-white-400'>
                <Link href="/">Home</Link>
                <Link href="/">Sobre nós</Link>
                <Link href="/">Nossas soluções</Link>
                <Link href="/">Sucessos</Link>
            </div>

            <div className='lg:hidden'>
                <img className="w-6 h-6" src="/icon-menu.svg" alt="Menu" />
            </div>

            <img className="hidden lg:absolute lg:flex -z-50 top-0 right-0" src="/image-background.png" alt="Void Genesis" />
        </nav>
    );
}
