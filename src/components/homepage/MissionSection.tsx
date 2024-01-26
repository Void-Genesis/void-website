
export default function MissionSection() {
  return (

    <div className="flex flex-col px-4 pt-[46px] pb-[132px] lg:px-[160px] lg:py-[132px]">
      <div className="p-2 pt-11 pb-8 lg:grid lg:grid-cols-12 lg:p-0 lg:justify-center lg:items-start lg:pl-4">

        <div className="lg:col-start-1 lg:col-end-7 lg:mt-14">
          <h1 className="mb-6 lg:text-[42px] lg:tracking-[1px]">Nossa Essência, Nossa Missão</h1>

          <div className="flex flex-col gap-[52px] lg:font-normal text-void-white-300 lg:text-lg text-base">
            <p>
              Na Void Genesis, estamos focados em moldar um futuro onde a tecnologia não é apenas uma ferramenta, mas uma força para mudança positiva a serviço da humanidade
            </p>
            <p>
              Especializados em soluções web de ponta, aplicações móveis e sistemas personalizados, combinamos inovação com simplicidade para criar interfaces de usuário e experiências que não são apenas intuitivas, mas também exclusivamente adaptadas às necessidades de cada cliente.
            </p>
            <p>
              Junte-se a nós em nossa missão de desenvolver tecnologias que vão além da funcionalidade, transformando a essência de como interagimos com o mundo digital
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center mt-[68px] lg:col-start-8 lg:col-end-13 lg:mt-0 lg:mr-4">
          <img className="z-0 w-[258px] lg:h-full lg:w-full" src="/void-eclipse.svg" alt="" />
        </div>

        <div className="lg:grid lg:col-span-12">
          <h1 className="mt-9 text-2xl lg:text-[32px] lg:tracking-[1px]">Empresas que receberam nossos serviços</h1>

          <div className="mt-9 flex flex-row gap-4 lg:justify-center">
            <img className="h-14 lg:h-full" src="/image-baterias-kennedy.svg" alt="" />
            <img className="h-14 lg:h-full" src="/image-rudewil.svg" alt="" />
            <img className="h-14 lg:h-full" src="/image-mri.svg" alt="" />

            <img className="h-14 lg:h-full" src="/image-lens.svg" alt="" />
            <img className="h-14 lg:h-full" src="/image-ipay.svg" alt="" />
            <img className="h-14 lg:h-full" src="/image-prudencios.svg" alt="" />
            <img className="h-14 lg:h-full" src="/image-sancamilo.svg" alt="" />
          </div>
        </div>

      </div>
    </div>

  )
}