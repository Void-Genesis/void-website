export default function SummaryMetrics() {
    return (
        <div className="flex flex-col p-1 mt-11">

            <div className="mb-6">

                <div className="flex flex-row justify-center items-center gap-1">
                    <img className="w-6" src="/icon-plus.svg" />
                    <p className="font-bold font-sora text-[32px] tracking-[1.908px] mb-1">3 milhões</p>
                </div>

                <div className="flex justify-center font-heebo font-normal text-base tracking-[0.16px] text-[#D2D3D6]">
                    Faturamento total gerado para clientes
                </div>
            </div>

            <div className="mb-6">

                <div className="flex flex-row justify-center items-center gap-1">
                    <img className="w-6" src="/icon-plus.svg" />
                    <p className="font-bold font-sora text-[32px] tracking-[1.908px] mb-1">5 anos</p>
                </div>

                <div className="flex justify-center font-heebo font-normal text-base tracking-[0.16px] text-[#D2D3D6]">
                    de mercado
                </div>
            </div>

            <div>

                <div className="flex flex-row justify-center items-center gap-1">
                    <img className="w-6" src="/icon-plus.svg" />
                    <p className="font-bold font-sora text-[32px] tracking-[1.908px] mb-1">78 Projetos</p>
                </div>

                <div className="flex justify-center font-heebo font-normal text-base tracking-[0.16px] text-[#D2D3D6]">
                    de consultoria e desenvolvimento
                </div>
            </div>

        </div>
    )
}