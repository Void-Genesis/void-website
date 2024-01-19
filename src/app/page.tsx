import Header from "@/components/layout/Header";
import PrimaryButton from "@/components/ui/PrimaryButton";
import VoidCard from "@/components/ui/VoidCard";

export default function Home() {
  return (<>
    <Header />

    <div className="flex flex-col px-4 pt-[46px]">

      <h1>Tecendo um futuro onde a tecnologia serve à humanidade.</h1>

      <h2 className="pt-6">Potencialize sua empresa com soluções profissionais nas áreas da tecnologia, marketing e vendas.</h2>

      <div className="mt-11">
        <PrimaryButton />
      </div>

      <div className="flex bg-red-500 p-2 border">
        <VoidCard />
      </div>

    </div>
  </>)
}
