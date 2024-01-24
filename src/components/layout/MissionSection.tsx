
export default function MissionSection() {
    return (

        <div className="flex flex-col px-4 pt-[46px] pb-[132px]">
            <div className="p-2 pt-11 pb-8 ">

                <h1 className="mb-6">Nossa Essência, Nossa Missão</h1>

                <div className="flex flex-col gap-[52px]">
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

                <div className="flex items-center justify-center mt-[68px]">
                    <img className="z-0 w-[258px]" src="/void-eclipse.svg" alt="" />
                </div>

                <h1 className="mt-9 text-2xl">Empresas que já prestamos serviços</h1>

                <div className="mt-9 flex flex-row gap-4">
                    <img className="h-14" src="/image-baterias-kennedy.svg" alt="" /><img src="" alt="" /><img src="" alt="" />
                    <img className="h-14" src="/image-rudewil.svg" alt="" /><img src="" alt="" /><img src="" alt="" />
                    <img className="h-14" src="/image-mri.svg" alt="" /><img src="" alt="" /><img src="" alt="" />
                </div>

            </div>
        </div>

    )
}