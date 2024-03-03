import SummaryMetrics from "../layout/SummaryMetrics";
import PrimaryButton from "../ui/PrimaryButton";
import VoidCard from "../ui/VoidCard";

export default function HeroSection() {
  return (
    <>
      <div className="absolute z-[-50] right-[-193px] top-[239px] w-[319px] h-[319px] rounded-full bg-void-white bg-opacity-30 blur-[235px] lg:hidden" />

      <div className="relative px-4 pt-[46px] py-[132px] lg:py-[132px] lg:px-[160px] lg:grid lg:grid-cols-12 grid grid-cols-4">
        <img
          className="hidden lg:absolute lg:flex top-0 right-0"
          src="/image-background.png"
          alt="Void Genesis"
        />

        <div className="col-span-4 lg:col-span-6 lg:row-start-1 lg:pt-6">
          <h1 className="text-[28px] lg:text-[50px] lg:leading-[110%] lg:tracking-[1px]">
            A tecnologia a serviço do seu negócio!
          </h1>
          <h2 className="text-base lg:text-2xl pt-6 mb-11 lg:mb-0">
            Potencialize sua empresa com soluções profissionais nas áreas da
            tecnologia, marketing e vendas.
          </h2>

          <div className="w-full lg:w-2/3 lg:mt-8">
            <PrimaryButton text="Falar com consultor no WhatsApp" />
          </div>
        </div>

        <div className="pt-16 px-9 col-span-4 lg:col-start-9 lg:col-span-4 lg:max-h-[512px] lg:max-w-[512px] lg:row-start-1 xl:ml-0">
          <VoidCard />
        </div>

        <div className="pt-16 col-span-4 lg:col-span-12 lg:mt-9 lg:pt-0">
          <SummaryMetrics />
        </div>
      </div>
    </>
  );
}
