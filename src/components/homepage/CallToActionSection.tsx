import PrimaryButton from "../ui/PrimaryButton";

export default function CallToActionSection() {
  return (
    <>
      <div className="pt-11 px-4 pb-32 lg:px-[160px] lg:py-[132px] bg-void-primary-black">
        <div className="floating-cube hover-light-effect flex flex-col relative border-void-grey-900 lg:hover:border-void-orange transition-all duration-500 border rounded py-[152px] px-4 text-center bg-radial bg-no-repeat bg-contain lg:px-72 lg:py-28">
          <img id="cube-top-right"
            className="absolute top-[-50px] right-[-35px] lg:right-[0px]"
            src="/cube-top-right.svg"
            alt="Void Genesis"
          />
          <img id="cube-top-left"
            className="absolute w-[117.29px] h-[127px] top-0 left-0"
            src="/cube-top-left.svg"
            alt="Void Genesis"
          />
          <img id="cube-bottom-left"
            className="absolute bottom-0 left-0"
            src="/cube-bottom-left.svg"
            alt="Void Genesis"
          />
          <img id="cube-bottom-right"
            className="absolute bottom-0 right-0"
            src="/cube-bottom-right.svg"
            alt="Void Genesis"
          />

          <h1 className="font-sora font-extrabold text-2xl leading-[120%] tracking-[1px] pt-6 pb-[24px] px-8 lg:text-5xl lg:leading-[120%]">
            Sua jornada de sucesso começa aqui!
          </h1>
          <p className="text-void-white-300 font-heebo text-base font-normal leading-[120%] tracking-[0.16px] px-8 lg:text-lg pb-[18px]">
            Atendimento personalizado pelo WhatsApp! Nossa equipe de
            especialistas está pronta para atender você.
          </p>
          <p className="text-void-white-300 font-heebo text-base font-normal leading-[120%] tracking-[0.16px] px-8 lg:text-lg pb-[60px]">
            Converse em tempo real e tire todas as suas dúvidas agora mesmo.
          </p>

          <div className="lg:px-8">
            <PrimaryButton text="Entrar em contato no WhatsApp" />
          </div>
        </div>
      </div>
    </>
  );
}
