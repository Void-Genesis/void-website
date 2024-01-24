import PrimaryButton from "../ui/PrimaryButton";

export default function CallToActionSection() {
    return (
        <>

            <div className="pt-11 px-4 pb-32">
                <div className="flex flex-col relative border-void-grey-900 border rounded py-[152px] px-4 text-center bg-custom-radial">

                    <img className="absolute w-[117.29px] h-[127px] top-0 left-0" src="/cube-top-left.svg" alt="Void Genesis" />
                    <img className="absolute top-[-50px] right-[-35px]" src="/cube-top-right.svg" alt="Void Genesis" />
                    <img className="absolute bottom-0 left-0" src="/cube-bottom-left.svg" alt="Void Genesis" />
                    <img className="absolute bottom-0 right-0" src="/cube-bottom-right.svg" alt="Void Genesis" />

                    <p className="text-void-white-300 font-heebo text-base font-normal leading-[120%] tracking-[0.16px] px-8">Atendimento personalizado pelo WhatsApp! Nossa equipe de especialistas está pronta para atender você. Converse em tempo real e tire todas as suas dúvidas agora mesmo</p>
                    <h1 className="font-sora font-extrabold text-2xl leading-[120%] tracking-[1px] pt-6 pb-[60px] px-8">Sua jornada de sucesso começa aqui!</h1>

                    <PrimaryButton text="Entrar em contato no WhatsApp" />

                </div>

            </div>

        </>
    )
}