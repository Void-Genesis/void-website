import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      <div className="px-4 pt-11 pb-32 border-t border-void-grey-800 lg:px-[160px] lg:py-[132px]">
        <h1 className="text-2xl font-extrabold font-sora lg:text-[42px]">
          Reflexos de Excelência
        </h1>

        <p className="mt-6 mb-11 text-base leading-[120%] tracking-[0.16px] font-normal text-void-white-300 lg:text-lg lg:leading-[120%]">
          Descubra as histórias vibrantes de quem já trilhou o caminho do
          sucesso conosco. Cada testemunho é um espelho do nosso compromisso com
          resultados excepcionais. Leia as experiências reais e veja como
          transformamos visões em vitórias tangíveis.
        </p>

        <div id="container-cards">
          <div id="cards" className="flex flex-row gap-x-4 mb-4 lg:pb-6">
            <TestimonialCard
              imageSrc="/image-amanda-rodrigues.svg"
              name="Amanda Rodrigues"
              ratingImageSrc="/icon-five-stars.svg"
              testimonialText="Escolher a VOID foi um divisor de águas para o nosso negócio. Eles não apenas entenderam nossos objetivos, mas os elevaram, trazendo insights estratégicos e uma execução que nos colocou em uma liga totalmente diferente. A visibilidade e o engajamento que alcançamos são diretamente atribuídos à sua paixão e inovação."
            />
            <TestimonialCard
              imageSrc="/image-amanda-rodrigues.svg"
              name="Amanda Rodrigues"
              ratingImageSrc="/icon-five-stars.svg"
              testimonialText="Escolher a VOID foi um divisor de águas para o nosso negócio. Eles não apenas entenderam nossos objetivos, mas os elevaram, trazendo insights estratégicos e uma execução que nos colocou em uma liga totalmente diferente. A visibilidade e o engajamento que alcançamos são diretamente atribuídos à sua paixão e inovação."
            />
            <TestimonialCard
              imageSrc="/image-amanda-rodrigues.svg"
              name="Amanda Rodrigues"
              ratingImageSrc="/icon-five-stars.svg"
              testimonialText="Escolher a VOID foi um divisor de águas para o nosso negócio. Eles não apenas entenderam nossos objetivos, mas os elevaram, trazendo insights estratégicos e uma execução que nos colocou em uma liga totalmente diferente. A visibilidade e o engajamento que alcançamos são diretamente atribuídos à sua paixão e inovação."
            />
            <TestimonialCard
              imageSrc="/image-amanda-rodrigues.svg"
              name="Amanda Rodrigues"
              ratingImageSrc="/icon-five-stars.svg"
              testimonialText="Escolher a VOID foi um divisor de águas para o nosso negócio. Eles não apenas entenderam nossos objetivos, mas os elevaram, trazendo insights estratégicos e uma execução que nos colocou em uma liga totalmente diferente. A visibilidade e o engajamento que alcançamos são diretamente atribuídos à sua paixão e inovação."
            />
          </div>

          <div
            id="card-buttons"
            className="flex flex-row items-center justify-center gap-12 mt-4 lg:mt-6"
          >
            <div className="cursor-pointer">
              <img
                className="rotate-180 w-8"
                src="/icon-chevron-r.svg"
                alt="Void Genesis"
              />
            </div>
            <div className="cursor-pointer">
              <img
                className="w-8"
                src="/icon-chevron-r.svg"
                alt="Void Genesis"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
