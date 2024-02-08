import TeamCard from "../ui/TeamCard";

export default function TeamSection() {
  return (
    <>
      <div className="pt-[46px] px-4 pb-[132px] lg:px-[160px] lg:py-[132px]">
        <div className="lg:grid lg:grid-cols-12">
          <h1 className="pb-6 font-sora font-extrabold tracking-[1px] text-2xl leading-[120%] lg:text-[48px] lg:col-start-1 lg:col-end-7">
            Conheça o nosso time
          </h1>

          <p className="pb-11 font-heebo font-normal text-base tracking-[0.16px] text-void-white-300 lg:text-lg lg:col-start-1 lg:col-end-7">
            Nossa equipe é o coração da VOID, um grupo diversificado de
            pensadores estratégicos, designers audaciosos e desenvolvedores
            visionários que se unem com um propósito comum: transformar cada
            desafio em uma oportunidade de crescimento para nossos clientes.
          </p>

          <div className="lg:col-start-8 lg:col-end-13 lg:row-start-1 relative">
            <img
              src="/logo-void-white.svg"
              alt="Void Genesis"
              className="absolute right-0 h-8 floating"
            />
          </div>

          <div className="lg:col-start-1 lg:col-end-13 gap-11 lg:gap-8">
            <div className="lg:grid lg:grid-cols-3 gap-11 lg:gap-8">
              <TeamCard
                imageSrc="/image-higor.png"
                altText="Higor Leodoro"
                name="Higor Leodoro"
                role="Web & Mobile Developer"
              />
              <TeamCard
                imageSrc="/image-carlos.png"
                altText="Carlos Alexandre"
                name="Carlos Alexandre"
                role="Audiovisual Producer"
              />
              <TeamCard
                imageSrc="/image-monney.png"
                altText="Rodrigo Monney"
                name="Rodrigo Monney"
                role="Backend & Web Developer"
              />
              <TeamCard
                imageSrc="/image-murilo.png"
                altText="Murilo Baltazar"
                name="Murilo Baltazar"
                role="Full Stack & Blockchain Developer"
              />
              <TeamCard
                imageSrc="/image-joao.png"
                altText="João Cazzador"
                name="João Cazzador"
                role="CEO"
              />
              <TeamCard
                imageSrc="/image-salomão.png"
                altText="Ygor Salomão"
                name="Ygor Salomão"
                role="Comercial Sales"
              />
              <TeamCard
                imageSrc="/image-samuca.png"
                altText="Samuel Vieira"
                name="Samuel Vieira"
                role="Design & Branding Producer"
              />
              <TeamCard
                imageSrc="/image-kauan.png"
                altText="Kauan Santos"
                name="Kauan Santos"
                role="UI/UX Interface Designer"
              />

              <div className="overflow-hidden py-14 px-20 rounded border border-void-grey-900 hover:border-void-orange hover-effect relative transition-all duration-300">
                <div className="flex flex-col items-center justify-center text-center">

                  <div className="absolute bottom-0 left-0 right-0 bg-void-orange z-0 transition-transform duration-500" />

                  <svg id="void-up" className="absolute" width="334" height="334" viewBox="0 20 295 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="void-grey-stroke">
                      <path id="up" opacity="0.6" d="M134.407 1.50003H266.9V67.1L100.895 67.1C82.2329 67.1 67.1 82.2329 67.1 100.895L67.1 266.9H1.50003V134.407L134.407 1.50003ZM267.9 234.105V68.1H333.5V200.593L200.593 333.5H68.1V267.9H234.105C252.767 267.9 267.9 252.767 267.9 234.105ZM317.352 333.5H268.597L333.5 268.597V317.352C333.5 326.265 326.265 333.5 317.352 333.5ZM66.4025 1.50003L1.50003 66.393V17.6476C1.50003 8.7355 8.7355 1.50003 17.6476 1.50003H66.4025Z" stroke="#0C0C0F" />
                    </g>
                  </svg>

                  <svg id="void-down" className="absolute" width="334" height="334" viewBox="0 20 295 340" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="void-grey-stroke">
                      <path id="up" opacity="0.6" d="M134.407 1.50003H266.9V67.1L100.895 67.1C82.2329 67.1 67.1 82.2329 67.1 100.895L67.1 266.9H1.50003V134.407L134.407 1.50003ZM267.9 234.105V68.1H333.5V200.593L200.593 333.5H68.1V267.9H234.105C252.767 267.9 267.9 252.767 267.9 234.105ZM317.352 333.5H268.597L333.5 268.597V317.352C333.5 326.265 326.265 333.5 317.352 333.5ZM66.4025 1.50003L1.50003 66.393V17.6476C1.50003 8.7355 8.7355 1.50003 17.6476 1.50003H66.4025Z" stroke="#0C0C0F" />
                    </g>
                  </svg>

                  <svg className="z-20" width="175" height="176" viewBox="0 0 175 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M140 0.5V35.5H52.4974C42.8351 35.5 35 43.3351 35 52.9974V140.5H0V70.5L70 0.5H140Z" fill="#F0F1F5" />
                    <path d="M35 175.5V140.5L122.503 140.5C132.165 140.5 140 132.665 140 123.003L140 35.5H175V105.5L105 175.5H35Z" fill="#F0F1F5" />
                    <path d="M35.0051 0.5L0 35.5051V9.24872C0 4.42008 3.92008 0.5 8.74872 0.5H35.0051Z" fill="#F0F1F5" />
                    <path d="M175 140.5V166.751C175 171.58 171.08 175.5 166.251 175.5H139.995L175 140.5Z" fill="#F0F1F5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
