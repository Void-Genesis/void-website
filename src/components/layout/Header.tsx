import Link from 'next/link';

export default function Header() {
    return (
        <nav className="flex flex-row justify-between p-6 border-b-[1px] border-void-grey-400 bg-[#131418]">
            <div>
                <Link href="/">
                    <img className="w-6 h-6" src="/logo-void-white.svg" alt="Void Genesis" />
                </Link>
            </div>

            <div>
                <img className="w-6 h-6" src="/icon-menu.svg" alt="Menu" />
            </div>
        </nav>
    )
}
