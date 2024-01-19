export default function Header() {
    return (
        <nav className="flex flex-row justify-between p-6 border-b-[1px] border-void-grey-400 bg-[#131418]">
            <div>
                <img className="w-6 h-6" src="/logo-void-white.svg" />
            </div>

            <div>
                <img className="w-6 h-6" src="/icon-menu.svg" />
            </div>
        </nav>
    )
}
