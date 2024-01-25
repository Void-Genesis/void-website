export default function SummaryMetrics() {
    return (
        <div className="flex flex-col p-1 mt-11 lg:flex-row justify-end items-start">

            <div className="mb-6 pr-6 lg:pr-14">

                <div className="flex flex-row justify-center lg:justify-end items-center gap-1">
                    <img className="w-6" src="/icon-plus.svg" />
                    <p className="font-bold font-sora text-[32px] tracking-[1.908px] mb-1 lg:text-5xl lg:mb-3">
                        5 milhões
                    </p>
                </div>

                <div className="flex justify-center font-heebo font-normal text-base tracking-[0.16px] text-[#D2D3D6] lg:text-xl lg:font-normal lg:leading-[120%] lg:tracking-[0.2px]">
                    <span>Faturamento em vendas gerado para clientes</span>
                </div>
            </div>

            <div className="mb-6 pr-6 lg:pr-14">

                <div className="flex flex-row justify-center lg:justify-end items-center gap-1">
                    <img className="w-6" src="/icon-plus.svg" />
                    <p className="font-bold font-sora text-[32px] tracking-[1.908px] mb-1 lg:text-5xl lg:mb-3">
                        5 anos
                    </p>
                </div>

                <div className="flex justify-center font-heebo font-normal text-base tracking-[0.16px] text-[#D2D3D6] lg:text-xl lg:font-normal lg:leading-[120%] lg:tracking-[0.2px">
                    <span>Atuação de mercado</span>
                </div>
            </div>

            <div className="">

                <div className="flex flex-row justify-end items-center gap-1">
                    <img className="w-6" src="/icon-plus.svg" />
                    <p className="font-bold font-sora text-[32px] tracking-[1.908px] mb-1 lg:text-5xl lg:mb-3">
                        78 <span className="lg:hidden">Consultorias</span>
                    </p>
                </div>

                <div className="flex justify-center font-heebo font-normal text-base tracking-[0.16px] text-[#D2D3D6] lg:text-xl lg:font-normal lg:leading-[120%] lg:tracking-[0.2px">
                    <span className="lg:hidden flex">Consultorias para nossos clientes</span>
                    <span className="lg:flex hidden">Consultorias</span>
                </div>
            </div>

        </div>
    )
}