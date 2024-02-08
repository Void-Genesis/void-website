import PrimaryButton from "../ui/PrimaryButton";

export default function Footer() {
  return (
    <div className="px-[16px] pt-[46px] pb-[132px] lg:py-[148px] lg:px-[160px]">
      <div className="px-9 py-[52px] lg:px-[52px] border border-void-grey-800 rounded-[2px]">
        <div className="flex flex-col p-2 gap-12 lg:flex-row lg:gap-16 xl:gap-5 lg:items-center lg:justify-between">
          <img
            className="p-2"
            src="/logo-void-genesis-white.svg"
            alt="Void Genesis"
          />

          <div className="border-t-[1px] border-void-grey-700 lg:hidden" />

          <div className="flex flex-col justify-center items-center gap-8 text-void-white-900 font-heebo text-lg font-normal leading-[120%] tracking-[0.18px] lg:border-void-grey-700 lg:border-l-[1px] lg:border-r-[1px] lg:px-16 lg:py-4 xl:px-32">
            <a className="hover:text-void-white transition-all duration-500" href="">Voltar para o topo</a>
            <a className="hover:text-void-white transition-all duration-500" href="">Sobre nós</a>
            <a className="hover:text-void-white transition-all duration-500" href="">Nossas soluções</a>
            <a className="hover:text-void-white transition-all duration-500" href="">Contato</a>
          </div>

          <div className="border-t-[1px] border-void-grey-700 lg:hidden" />

          <div className="">
            <h1 className="text-void-white pb-5 text-center font-normal text-lg leading-[120%] tracking-[0.18px] lg:text-right lg:text-lg">
              Entre em contato conosco
            </h1>

            <PrimaryButton text="Chamar no WhatsApp" />
          </div>
        </div>
      </div>
    </div>
  );
}
