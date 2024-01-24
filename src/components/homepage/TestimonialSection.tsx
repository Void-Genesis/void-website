export default function TestimonialSection() {
    return (
        <>
            <div className="px-4 pt-11 pb-32 border-t border-void-grey-800">
                <h1 className="text-2xl font-extrabold font-sora">Reflexos de Excelência</h1>

                <p className="mt-6 mb-11 text-base leading-[120%] tracking-[0.16px] font-normal text-void-white-300 lat">Descubra as histórias vibrantes de quem já trilhou o caminho do sucesso conosco. Cada testemunho é um espelho do nosso compromisso com resultados excepcionais. Leia as experiências reais e veja como transformamos visões em vitórias tangíveis.</p>

                <div id="container-cards">

                    <div id="cards" className="flex flex-row gap-x-4 mb-4">
                        <div id="card" className="flex flex-col">
                            <div className="p-5 bg-void-grey-300 border border-void-grey-800 rounded">
                                <div className="pt-6 pb-7 px-[10px] text-center">

                                    <div className="flex flex-row items-center justify-between mb-5">
                                        <img className="w-8" src="/image-amanda-rodrigues.svg" alt="" />
                                        <h1 className="text-base font-black">Amanda Rodrigues</h1>
                                        <img className="h-[10px]" src="/icon-five-stars.svg" alt="" />
                                    </div>

                                    <p className="mt-3 text-base leading-[120%] tracking-[0.16px] font-normal text-left">Escolher a VOID foi um divisor de águas para o nosso negócio. Eles não apenas entenderam nossos objetivos, mas os elevaram, trazendo insights estratégicos e uma execução que nos colocou em uma liga totalmente diferente. A visibilidade e o engajamento que alcançamos são diretamente atribuídos à sua paixão e inovação.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="card-buttons" className="flex flex-row items-center justify-center gap-12 mt-4">
                        <div>
                            <img className="rotate-180 w-8" src="/icon-chevron-r.svg" alt="Void Genesis" />
                        </div>
                        <div>
                            <img className="w-8" src="/icon-chevron-r.svg" alt="Void Genesis" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
