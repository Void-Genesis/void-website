import TestimonialCard from "../ui/TestimonialCard";

export default function TestimonialSection() {
  return (
    <>
      <div className="px-4 pt-11 pb-32 border-t border-void-grey-800 lg:px-[160px] lg:py-[132px]">
        <div className="grid grid-cols-12">
          <h1 className="col-start-1 col-end-7 text-2xl font-extrabold font-sora lg:text-[42px]">
            Reflexos de Excelência
          </h1>

          <p className="col-start-1 col-end-7 mt-6 mb-11 text-base leading-[120%] tracking-[0.16px] font-normal text-void-white-300 lg:text-lg lg:leading-[120%]">
            Descubra as histórias vibrantes de quem já trilhou o caminho do
            sucesso conosco. Cada testemunho é um espelho do nosso compromisso com
            resultados excepcionais. Leia as experiências reais e veja como
            transformamos visões em vitórias tangíveis.
          </p>

          <div className="relative col-start-8 lg:col-end-13">
            <img
              src="/logo-void-white.svg"
              alt="Void Genesis"
              className="hidden absolute right-0 top-0 h-8 lg:flex floating"
            />
          </div>

          <div id="container-cards" className="col-start-1 col-end-13">
            <div id="cards" className="flex flex-row gap-x-5 mb-4 lg:pb-6 lg:overflow-x-auto lg:flex-nowrap no-horizontal-scroll lg:overflow-y-hidden">
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
              <div className="cursor-pointer svg-container transition-all duration-500">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="arrow-left" d="M31.5 30L31.5 2C31.5 1.17158 30.8284 0.500002 30 0.500002L2 0.500001C1.17158 0.500001 0.500003 1.17157 0.500003 2L0.500002 30C0.500002 30.8284 1.17158 31.5 2 31.5L30 31.5C30.8284 31.5 31.5 30.8284 31.5 30Z" stroke="#505566" />
                  <path d="M20 24L12 16L20 8" stroke="#F0F4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="cursor-pointer svg-container transition-all duration-500">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="arrow-right" d="M0.5 30L0.499999 2C0.499999 1.17158 1.17157 0.500002 2 0.500002L30 0.500001C30.8284 0.500001 31.5 1.17157 31.5 2L31.5 30C31.5 30.8284 30.8284 31.5 30 31.5L2 31.5C1.17157 31.5 0.5 30.8284 0.5 30Z" stroke="#505566" />
                  <path d="M12 24L20 16L12 8" stroke="#F0F4FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
