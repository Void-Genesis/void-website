import CarrouselCard from "../ui/CarrouselCard";
import PrimaryButton from "../ui/PrimaryButton";

export default function SolutionsSection() {
  return (
    <>
      <div className="border-t border-void-grey-800 pt-12 pb-[132px] bg-void-grey-200">
        <div className="lg:flex lg:flex-col lg:py-44 lg:px-40">
          <div className="lg:flex lg:flex-row lg:gap-20">
            <div className="lg:w-1/2">
              <h1 className="lg:font-sora lg:text-[42px] lg:font-extrabold lg:leading-[120%] lg:tracking-[1px]">
                Soluções Sob Medida para Seu Sucesso
              </h1>
              <p className="mt-6">
                Aqui na nossa empresa, combinamos a magia do design com a
                eficácia da tecnologia. Nosso objetivo? Levar sua marca para o
                próximo nível com serviços que vão desde identidades visuais
                únicas até estratégias online que realmente funcionam!
              </p>
            </div>

            <div className="lg:w-1/2 relative">
              <img
                className="h-8 hidden lg:absolute lg:flex lg:right-0 lg:top-0"
                src="/logo-void-white.svg"
                alt="Void Genesis"
              />

              <div className="lg:absolute lg:bottom-0 lg:right-0 lg:left-0">
                <PrimaryButton text="Falar com consultor no WhatsApp" />
              </div>
            </div>
          </div>

          <div className="lg:mt-11">
            <div id="cards" className="flex flex-row gap-x-4 mb-6">
              <CarrouselCard />
              <CarrouselCard />
              <CarrouselCard />
              <CarrouselCard />
              <CarrouselCard />
              <CarrouselCard />
              <CarrouselCard />
            </div>

            <div
              id="buttons"
              className="flex flex-row justify-center items-center gap-12"
            >
              <div>
                <img
                  className="rotate-180 w-8 cursor-pointer"
                  src="/icon-chevron-r.svg"
                  alt="Void Genesis"
                />
              </div>
              <div>
                <img
                  className="w-8 cursor-pointer"
                  src="/icon-chevron-r.svg"
                  alt="Void Genesis"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
