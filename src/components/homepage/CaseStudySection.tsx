import PrimaryButton from "../ui/PrimaryButton";

export default function CaseStudySection() {
  return (
    <>
      <div className="pt-[46px] px-4 pb-[130px] lg:px-[160px] lg:py-[132px] bg-void-grey-200">

        <div className="lg:flex lg:flex-row lg:gap-8">
          <div className="lg:w-1/2">
            <h1 className="font-extrabold text-2xl font-sora mb-6 lg:text-[42px] lg:leading-[120%] lg:tracking-[1px]">Histórias de Sucesso Impulsionadas por Nós</h1>

            <div className="flex flex-col">
              <p className="font-normal text-base mb-7 text-void-white-300 lg:text-lg">No universo do marketing digital, cada clique tem o potencial de desbloquear um mundo de oportunidades. Foi exatamente isso que fizemos para um de nossos clientes, alavancando o poder dos Google Ads!</p>

              <div className="flex flex-rows gap-3">
                <img className="lg:w-8" src="/icon-plus.svg" alt="Void Genesis" />
                <h1 className="text-void-orange font-bold text-xl lg:text-[34px] lg:leading-[110%]">5 milhões em vendas</h1>
              </div>

              <div className="flex flex-rows lg:items-end gap-3 mt-3">
                <img className="lg:w-8" src="/icon-chart-up.svg" alt="Void Genesis" />
                <h1 className="text-void-white font-bold text-base lg:text-lg lg:font-heebo lg:leading-[120%]">Faturamento gerado para cliente através do Google Ads</h1>
              </div>

              <div className="border border-void-grey-800 mt-12 lg:my-9" />

              <p className="font-normal text-base mb-7 text-void-white-300 lg:text-lg">Em nossa jornada contínua de excelência, já desenvolvemos mais de 60 projetos exclusivos, cada um refletindo nossa paixão por inovação e eficiência. De soluções web a aplicativos móveis personalizados, nossa equipe não apenas atende às expectativas - nós as superamos. Nosso compromisso é com o sucesso tangível dos nossos clientes, impulsionado por tecnologia de ponta e criatividade sem limites</p>
              <div className="flex flex-rows gap-3">
                <img className="lg:w-8" src="/icon-plus.svg" alt="Void Genesis" />
                <h1 className="text-void-orange font-bold text-xl lg:text-[34px]">72 Projetos realizados</h1>
              </div>

              <div className="flex flex-rows gap-3 mt-3">
                <img className="lg:w-11" src="/icon-rocket.svg" alt="Void Genesis" />
                <h1 className="text-void-white font-bold text-base lg:text-lg">Com nossa equipe especializada em produto, já alcançamos este incrível número</h1>
              </div>

              <div className="border border-void-grey-800 mt-12 lg:hidden" />
            </div>
          </div>

          <div className="lg:w-1/2 lg:flex lg:flex-col justify-between">

            <div className="justify-center items-center">
              <div className="lg:items-center lg:justify-center lg:flex">
                <img className="" src="/image-puzzle-full.png" alt="Void Genesis" />
              </div>
            </div>

            <div className="lg:relative lg:bottom-0">

              <p className="mt-12 font-normal font-heebo text-base text-void-white-300 mb-7 lg:text-right lg:pl-40 lg:text-lg lg:mt-0">
                Com a Void Genesis, cada projeto é uma nova história de sucesso!
              </p>

              <PrimaryButton text="Falar com consultor no WhatsApp" />
            </div>

          </div>
        </div>

      </div>

      {/* <div className="pt-[46px] px-4 pb-[130px] bg-void-grey-200">
        <h1 className="font-extrabold text-2xl font-sora mb-6">Histórias de Sucesso Impulsionadas por Nós</h1>

        <div className="flex flex-col">
          <p className="font-normal text-base mb-7 text-void-white-300">No universo do marketing digital, cada clique tem o potencial de desbloquear um mundo de oportunidades. Foi exatamente isso que fizemos para um de nossos clientes, alavancando o poder dos Google Ads!</p>

          <div className="flex flex-rows gap-3">
            <img src="/icon-plus.svg" alt="Void Genesis" />
            <h1 className="text-void-orange font-bold text-xl">3 milhões de faturamento</h1>
          </div>

          <div className="flex flex-rows gap-3 mt-3">
            <img src="/icon-chart-up.svg" alt="Void Genesis" />
            <h1 className="text-void-white font-bold text-base">Faturamento gerado para cliente através do Google ADS</h1>
          </div>

          <div className="border border-void-grey-800 mt-12" />
        </div>

        <div className="flex flex-col mt-12">
          <p className="font-normal text-base mb-7 text-void-white-300">Em nossa jornada contínua de excelência, já desenvolvemos mais de 60 projetos exclusivos, cada um refletindo nossa paixão por inovação e eficiência. De soluções web a aplicativos móveis personalizados, nossa equipe não apenas atende às expectativas - nós as superamos. Nosso compromisso é com o sucesso tangível dos nossos clientes, impulsionado por tecnologia de ponta e criatividade sem limites</p>
          <div className="flex flex-rows gap-3">
            <img src="/icon-plus.svg" alt="Void Genesis" />
            <h1 className="text-void-orange font-bold text-xl">72 Projetos realizados</h1>
          </div>

          <div className="flex flex-rows gap-3 mt-3">
            <img src="/icon-rocket.svg" alt="Void Genesis" />
            <h1 className="text-void-white font-bold text-base">Com nossa equipe especializada em produto, já alcançamos este incrível número</h1>
          </div>

          <div className="border border-void-grey-800 mt-12" />

          <p className="mt-12 font-normal font-heebo text-base text-void-white-300 mb-7">
            Com a Void Genesis, cada projeto é uma nova história de sucesso!
          </p>

          <PrimaryButton text="Falar com consultor no WhatsApp" />
        </div>

        <div className="flex items-center justify-center mt-12 pb-32">
          <div className="flex w-full justify-center">
            <img className="absolute z-10" src="/image-puzzle.svg" alt="" />
            <img className="relative -left-3 top-6 w-14" src="/image-figma.svg" alt="" />
            <img className="relative -right-28 top-1 w-14" src="/image-google.svg" alt="" />
            <img className="relative -right-14 -bottom-36 w-14" src="/image-github.svg" alt="" />
            <img className="relative -left-44 -bottom-48 w-14" src="/image-vscode.svg" alt="" />
          </div>
        </div>

      </div> */}
    </>
  )
}