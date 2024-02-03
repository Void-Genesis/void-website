export default function PrimaryButton({ text }: { text: string }) {
  return (
    <div
      id="primary-button"
      className="w-full flex items-center justify-center bg-void-blue hover:bg-[#1843C2] transition-colors duration-500 rounded-[3px] py-5 px-8 cursor-pointer transform hover:scale-[1.01]"
    >
      <div className="text-sm font-semibold pr-2 lg:text-lg">{text}</div>

      <div className="rounded-md items-center justify-center h-8 lg:h-8">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="32" height="32" />
          <g id="button">
            <g clip-path="url(#clip0_601_17317)">
              <path
                id="background"
                d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z"
              />
              <path
                id="down"
                d="M-10 42L0 32M0 32H-10M0 32V42"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="up"
                d="M32 0L42 -10M42 -10H32M42 -10V0"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_601_17317">
              <path d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}
