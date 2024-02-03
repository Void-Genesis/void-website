interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  altText: string;
}

export default function TeamCard({
  name,
  role,
  imageSrc,
  altText,
}: TeamCardProps) {
  return (
    <div className="px-5 pt-5 pb-8 rounded border border-void-grey-900 bg-void-grey-200">
      <div className="flex flex-col items-center justify-center text-center">
        <img className="rounded-full" src={imageSrc} alt={altText} />

        <h1 className="pt-3 text-void-white font-sora font-semibold text-xl leading-[120%]">
          {name}
        </h1>
        <p className="pt-6 text-void-white-400 font-heebo text-lg font-medium tracking-[0.18px] leading-[120%]">
          {role}
        </p>
      </div>
    </div>
  );
}
