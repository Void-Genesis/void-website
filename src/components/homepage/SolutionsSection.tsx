import CarrouselCard from "../ui/CarrouselCard";
import PrimaryButton from "../ui/PrimaryButton";

export default function SolutionsSection() {
  return (
    <div className="border-t border-void-grey-800 bg-void-grey-200 pb-[132px] lg:h-full px-4 py-12 lg:px-40 lg:py-32">
      <div className="grid grid-cols-4 lg:grid lg:grid-cols-12 lg:px-0 lg:py-0">
        <div className="col-span-4 gap-20 lg:flex-row lg:col-start-1 lg:col-end-7">
          <div>
            <h1 className="text-[42px] font-extrabold leading-[120%] tracking-[1px] font-sora">
              Soluções Sob Medida para Seu Sucesso
            </h1>
            <p className="mt-6 lg:text-lg">
              Aqui na nossa empresa, combinamos a magia do design com a eficácia
              da tecnologia. Nosso objetivo? Levar sua marca para o próximo
              nível com serviços que vão desde identidades visuais únicas até
              estratégias online que realmente funcionam!
            </p>
          </div>
        </div>

        <div className="relative w-full col-span-4 lg:col-start-8 lg:col-end-13">
          <img
            src="/logo-void-white.svg"
            alt="Void Genesis"
            className="hidden absolute right-0 top-0 h-8 lg:flex"
          />
          <div className="lg:absolute lg:bottom-0 lg:left-0 lg:right-0 pt-6">
            <PrimaryButton text="Falar com consultor no WhatsApp" />
          </div>
        </div>

        <div className="mt-11 col-span-4 lg:col-start-1 lg:col-end-13">
          <div
            id="cards"
            className="flex flex-row gap-x-4 mb-6 lg:overflow-x-auto lg:flex-nowrap no-horizontal-scroll lg:overflow-y-hidden"
          >
            <CarrouselCard />
          </div>

          <div
            id="buttons"
            className="flex flex-row items-center justify-center gap-12"
          >
            <img
              src="/icon-chevron-r.svg"
              alt="Void Genesis"
              className="w-8 cursor-pointer rotate-180"
            />
            <img
              src="/icon-chevron-r.svg"
              alt="Void Genesis"
              className="w-8 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
