import ServicesCard from "../ui/ServicesCard";

export default function ServicesSection() {
  const consultancyList = [
    "Concepção das ideias",
    "Viablidade do projeto",
    "Estudo de caso",
    "Estudo de caso",
    "Estudo de caso",
    "Estudo de caso",
    "Estudo de caso",
    "Estudo de caso",
    "Estudo de caso",
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center px-4 sm:px-6 lg:px-10 xl:px-36 py-10 gap-6">
      <ServicesCard
        title="CONSULTORIA"
        itemList={consultancyList}
        price={5000}
      />
      <ServicesCard
        title="Landing Page"
        itemList={consultancyList}
        price={7500}
      />
      <ServicesCard
        title="Site Personalizado"
        itemList={consultancyList}
        price={12000}
      />
      <ServicesCard
        title="FlexCore"
        itemList={consultancyList}
        price={80000}
        isFlexCore
      />
    </div>
  );
}
