import SummaryMetrics from "../layout/SummaryMetrics";
import PrimaryButton from "../ui/PrimaryButton";
import VoidCard from "../ui/VoidCard";

export default function HeroSection() {
    return (<>
        <div className="absolute right-[-193px] top-[239px] z-[-50] w-[319px] h-[319px] rounded-full bg-void-white bg-opacity-30 blur-[235px]" />

        <div className="flex flex-col px-4 pt-[46px] pb-[132px]">

            <h1>Tecendo um futuro onde a tecnologia serve à humanidade.</h1>
            <h2 className="pt-6 mb-11">Potencialize sua empresa com soluções profissionais nas áreas da tecnologia, marketing e vendas.</h2>

            <PrimaryButton text="Falar com consultor no WhatsApp" />
            <VoidCard />
            <SummaryMetrics />
        </div>
    </>)
}