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
            className="hidden absolute right-0 top-0 h-8 lg:flex floating"
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
            <CarrouselCard />
            <CarrouselCard />
            <CarrouselCard />
            <CarrouselCard />
          </div>

          <div
            id="card-buttons"
            className="flex flex-row items-center justify-center gap-12 mt-4 lg:mt-6"
          >
            <div className="cursor-pointer svg-container transition-all duration-500">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="arrow-left" d="M31.5 30L31.5 2C31.5 1.17158 30.8284 0.500002 30 0.500002L2 0.500001C1.17158 0.500001 0.500003 1.17157 0.500003 2L0.500002 30C0.500002 30.8284 1.17158 31.5 2 31.5L30 31.5C30.8284 31.5 31.5 30.8284 31.5 30Z" stroke="#505566" />
                <path d="M20 24L12 16L20 8" stroke="#F0F4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div className="cursor-pointer svg-container transition-all duration-500">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="arrow-right" d="M0.5 30L0.499999 2C0.499999 1.17158 1.17157 0.500002 2 0.500002L30 0.500001C30.8284 0.500001 31.5 1.17157 31.5 2L31.5 30C31.5 30.8284 30.8284 31.5 30 31.5L2 31.5C1.17157 31.5 0.5 30.8284 0.5 30Z" stroke="#505566" />
                <path d="M12 24L20 16L12 8" stroke="#F0F4FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
