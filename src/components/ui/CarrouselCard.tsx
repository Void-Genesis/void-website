export default function CarrouselCard() {
  return (
    <div className="flex flex-col bg-void-grey-300 rounded border border-void-grey-800 w-[283px] h-[481px] min-w-[283px]">
      <div className="bg-void-primary-black w-full h-[311px] rounded"></div>

      <div className="text-center px-[10px] pt-6 pb-7">
        <h1 className="font-black text-base">Desenvolvimento personalizado</h1>
        <p className="text-sm font-normal mt-3">
          Soluções que não se encontram na prateleira. Criamos softwares sob
          medida que se encaixam perfeitamente nas necessidades e objetivos do
          seu negócio, impulsionando a eficiência e a inovação
        </p>
      </div>
    </div>
  );
}
