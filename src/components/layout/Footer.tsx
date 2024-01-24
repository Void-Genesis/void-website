import PrimaryButton from "../ui/PrimaryButton";

export default function Footer() {
    return (
        <>

            <div className="px-[16px] pt-[46px] pb-[132px]">
                <div className="px-9 py-[52px] border border-void-grey-800 rounded-[2px]">
                    <div className="flex flex-col p-2 gap-12">

                        <img className="p-2" src="/logo-void-genesis-white.svg" alt="Void Genesis" />

                        <div className="border-t-[1px] border-void-grey-700" />

                        <div className="flex flex-col justify-center items-center gap-8 text-void-white-900 font-heebo text-lg font-normal leading-[120%] tracking-[0.18px]">
                            <a href="">Voltar para o topo</a>
                            <a href="">Sobre nós</a>
                            <a href="">Nossas soluções</a>
                            <a href="">Contato</a>
                        </div>

                        <div className="border-t-[1px] border-void-grey-700" />

                        <div>
                            <h1 className="text-void-white pb-5 text-center font-normal text-lg leading-[120%] tracking-[0.18px]">Entre em contato conosco</h1>

                            <PrimaryButton text="Chamar no WhatsApp" />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}