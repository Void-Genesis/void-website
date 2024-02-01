import TeamCard from "../ui/TeamCard";

export default function TeamSection() {
  return (
    <>
      <div className="pt-[46px] px-4 pb-[132px] lg:px-[160px] lg:py-[132px]">
        <h1 className="pb-6 font-sora font-extrabold tracking-[1px] text-2xl leading-[120%] lg:text-[42px]">
          Conheça o nosso time
        </h1>

        <p className="pb-11 font-heebo font-normal text-base tracking-[0.16px] text-void-white-300 lg:text-lg">
          Nossa equipe é o coração da VOID, um grupo diversificado de pensadores
          estratégicos, designers audaciosos e desenvolvedores visionários que
          se unem com um propósito comum: transformar cada desafio em uma
          oportunidade de crescimento para nossos clientes.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-11 lg:gap-8">
          <TeamCard
            imageSrc="/image-kauan.svg"
            altText="Kauan Santos"
            name="Kauan Santos"
            role="UI/UX Interface Designer"
          />
          <TeamCard
            imageSrc="/image-kauan.svg"
            altText="Kauan Santos"
            name="Kauan Santos"
            role="UI/UX Interface Designer"
          />
          <TeamCard
            imageSrc="/image-kauan.svg"
            altText="Kauan Santos"
            name="Kauan Santos"
            role="UI/UX Interface Designer"
          />
          <TeamCard
            imageSrc="/image-kauan.svg"
            altText="Kauan Santos"
            name="Kauan Santos"
            role="UI/UX Interface Designer"
          />
          <TeamCard
            imageSrc="/image-kauan.svg"
            altText="Kauan Santos"
            name="Kauan Santos"
            role="UI/UX Interface Designer"
          />

          <div className="py-14 px-20 rounded border border-void-grey-900">
            <div className="flex flex-col items-center justify-center text-center">
              <img className="" src="/logo-void-white.svg" alt="Void Genesis" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
