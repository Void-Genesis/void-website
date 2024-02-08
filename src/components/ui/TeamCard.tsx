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
    <div className="overflow-hidden px-5 pt-5 pb-8 rounded border border-void-grey-900 bg-void-grey-200 relative hover-effect hover:border-void-blue transition-all duration-300">

      <div className="absolute bottom-0 left-0 right-0 bg-void-blue z-0 transition-transform duration-500" />

      <svg id="void-up" className="absolute" width="334" height="334" viewBox="0 20 295 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="void-grey-stroke">
          <path id="up" opacity="0.6" d="M134.407 1.50003H266.9V67.1L100.895 67.1C82.2329 67.1 67.1 82.2329 67.1 100.895L67.1 266.9H1.50003V134.407L134.407 1.50003ZM267.9 234.105V68.1H333.5V200.593L200.593 333.5H68.1V267.9H234.105C252.767 267.9 267.9 252.767 267.9 234.105ZM317.352 333.5H268.597L333.5 268.597V317.352C333.5 326.265 326.265 333.5 317.352 333.5ZM66.4025 1.50003L1.50003 66.393V17.6476C1.50003 8.7355 8.7355 1.50003 17.6476 1.50003H66.4025Z" stroke="#D2D3D6" />
        </g>
      </svg>

      <svg id="void-down" className="absolute" width="334" height="334" viewBox="0 20 295 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="void-grey-stroke">
          <path id="up" opacity="0.6" d="M134.407 1.50003H266.9V67.1L100.895 67.1C82.2329 67.1 67.1 82.2329 67.1 100.895L67.1 266.9H1.50003V134.407L134.407 1.50003ZM267.9 234.105V68.1H333.5V200.593L200.593 333.5H68.1V267.9H234.105C252.767 267.9 267.9 252.767 267.9 234.105ZM317.352 333.5H268.597L333.5 268.597V317.352C333.5 326.265 326.265 333.5 317.352 333.5ZM66.4025 1.50003L1.50003 66.393V17.6476C1.50003 8.7355 8.7355 1.50003 17.6476 1.50003H66.4025Z" stroke="#D2D3D6" />
        </g>
      </svg>

      <div className="flex flex-col items-center justify-center text-center z-20 relative">
        <img className="rounded-full max-w-[160px] max-h-[160px]" src={imageSrc} alt={altText} />
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
