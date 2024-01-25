import CarrouselCard from "../ui/CarrouselCard";
import PrimaryButton from "../ui/PrimaryButton";

export default function SolutionsSection() {
    return (
        <div className="border-t border-void-grey-800 pt-12 pb-[132px] bg-void-grey-200 px-4">
            <h1>Soluções Sob Medida para Seu Sucesso</h1>

            <p className="mt-6">Aqui na nossa empresa, combinamos a magia do design com a eficácia da tecnologia. Nosso objetivo? Levar sua marca para o próximo nível com serviços que vão desde identidades visuais únicas até estratégias online que realmente funcionam!</p>

            <div className="mt-11 mb-11">
                <PrimaryButton text="Falar com consultor no WhatsApp" />
            </div>

            <div id="carrousel-container">
                <div id="cards" className="flex flex-row gap-x-4 mb-4">
                    <CarrouselCard />
                    <CarrouselCard />
                    <CarrouselCard />
                </div>

                <div id="buttons" className="flex flex-row justify-center items-center gap-12">
                    <div>
                        <img className="rotate-180 w-8" src="/icon-chevron-r.svg" alt="Void Genesis" />
                    </div>
                    <div>
                        <img className="w-8" src="/icon-chevron-r.svg" alt="Void Genesis" />
                    </div>
                </div>
            </div>
        </div>
    )
}