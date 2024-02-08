interface TestimonialCardProps {
  imageSrc: string;
  name: string;
  ratingImageSrc: string;
  testimonialText: string;
}

export default function TestimonialCard({
  imageSrc,
  name,
  ratingImageSrc,
  testimonialText,
}: TestimonialCardProps) {
  return (
    <div className="flex flex-col lg:min-w-[400px] hover-light-effect">
      <div className="group relative p-5 bg-void-grey-300 border border-void-grey-800 rounded hover:border-void-orange transition-all duration-500">
        <div className="pt-6 pb-14 px-[10px] text-center">
          <div className="flex flex-row items-center justify-between mb-5">
            <img className="w-8 lg:w-12" src={imageSrc} alt={name} />
            <h1 className="text-base font-black lg:text-lg">{name}</h1>
            <img
              className="h-[10px] lg:h-[12px]"
              src={ratingImageSrc}
              alt="Rating"
            />
          </div>
          <p className="mt-3 text-base leading-[120%] tracking-[0.16px] font-normal text-left lg:text-lg lg:leading-[120%]">
            {testimonialText}
          </p>
        </div>
        <div className="bg-void-orange h-5 bottom-0 left-0 right-0 absolute height-animation" />
      </div>
    </div>
  );
}
