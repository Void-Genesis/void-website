export default function CarrouselCard() {
  return (
    <div className="lg:height-animation relative hover-light-effect hover:border-void-orange transition-all duration-300 lg:flex lg:items-end border min-w-[300px] lg:min-w-[376px] min-h-[481px] bg-[url('/image-custom-development.png')] bg-no-repeat bg-cover rounded border-void-grey-900 hover:cursor-pointer group">
      <div className="absolute bottom-0 left-0 right-0 p-3 w-full lg:px-5 lg:py-6 lg:text-xl lg:font-black bg-void-grey-300 border-transparent rounded-bl rounded-br">

        <span className="text-lg font-bold">Desenvolvimento personalizado</span>

        <p className="mt-2 lg:font-normal lg:text-base lg:mt-3 group-hover:block lg:opacity-0 group-hover:opacity-100">
          Soluções que não se encontram na prateleira. Criamos softwares sob
          medida que se encaixam perfeitamente nas necessidades e objetivos do
          seu negócio, impulsionando a eficiência e a inovação.
        </p>
      </div>
    </div>
  );
}
