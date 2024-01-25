import SummaryMetrics from "../layout/SummaryMetrics";
import PrimaryButton from "../ui/PrimaryButton";
import VoidCard from "../ui/VoidCard";

export default function HeroSection() {
    return (<>

        {/* light effect */}
        <div className="lg:hidden absolute right-[-193px] top-[239px] z-[-50] w-[319px] h-[319px] rounded-full bg-void-white bg-opacity-30 blur-[235px]" />

        <div className="px-4 lg:mt-[45px]">
            <div className="pt-[46px] pb-[132px] lg:px-[160px] lg:grid lg:grid-cols-12 lg:grid-rows-1 lg:row-span-1">
                <div className="lg:pt-6 lg:col-start-1 lg:col-end-7">
                    <h1 className="lg:text-[42px] lg:tracking-[1px]">Tecendo um futuro onde a tecnologia serve à humanidade.</h1>
                    <h2 className="pt-6 mb-11 lg:text-lg">Potencialize sua empresa com soluções profissionais nas áreas da tecnologia, marketing e vendas.</h2>

                    <PrimaryButton text="Falar com consultor no WhatsApp" />

                </div>

                <div className="lg:col-start-7 lg:col-end-13 lg:grid lg:ml-[21px]">
                    <VoidCard />
                </div>

                <div className="lg:col-start-3 lg:col-end-13 pt-16">
                    <SummaryMetrics />
                </div>
            </div>
        </div>
    </>)
}