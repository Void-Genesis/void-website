export default function SummaryMetrics() {
  return (
    <div className="flex flex-col mt-11 p-1 lg:flex-row lg:justify-end lg:items-start lg:mt-0 lg:p-0">
      <div className="mb-6 pr-6 lg:pr-14 lg:mb-0">
        <div className="flex items-center justify-center gap-1  lg:justify-end lg:mb-3">
          <img src="/icon-plus.svg" className="w-6" />
          <p className=" text-[32px] font-bold tracking-[1.908px] font-sora lg:text-5xl">
            5 milhões
          </p>
        </div>
        <div className="flex justify-center text-base font-normal tracking-[0.16px] text-[#D2D3D6] font-heebo lg:justify-center lg:text-lg lg:font-normal lg:leading-[120%] lg:tracking-[0.2px]">
          <span>Faturamento em vendas gerado para clientes</span>
        </div>
      </div>

      <div className="mb-6 pr-6 lg:pr-14 lg:mb-0">
        <div className="flex items-center justify-center gap-1  lg:justify-end lg:mb-3">
          <img src="/icon-plus.svg" className="w-6" />
          <p className=" text-[32px] font-bold tracking-[1.908px] font-sora lg:text-5xl">
            5 anos
          </p>
        </div>
        <div className="flex justify-center text-base font-normal tracking-[0.16px] text-[#D2D3D6] font-heebo lg:justify-center lg:text-lg lg:font-normal lg:leading-[120%] lg:tracking-[0.2px]">
          <span>Atuação de mercado</span>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-end gap-1  lg:mb-3">
          <img src="/icon-plus.svg" className="w-6" />
          <p className="text-[32px] font-bold tracking-[1.908px] font-sora lg:text-5xl">
            78 <span className="lg:hidden">Consultorias</span>
          </p>
        </div>
        <div className="flex justify-center text-base font-normal tracking-[0.16px] text-[#D2D3D6] font-heebo lg:justify-center lg:text-lg lg:font-normal lg:leading-[120%] lg:tracking-[0.2px]">
          <span className="lg:hidden">Consultorias para nossos clientes</span>
          <span className="hidden lg:flex">Consultorias</span>
        </div>
      </div>
    </div>
  );
}
