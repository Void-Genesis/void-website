

export default function PrimaryButton({ text }: { text: string }) {
  return (
    <div className="w-full flex items-center justify-center bg-void-blue rounded-[3px] py-5 px-8 cursor-pointer">
      <div className="text-sm font-semibold pr-2 lg:text-lg">
        {text}
      </div>

      <img className="rounded-md items-center justify-center h-6 lg:h-8" src="/icon-button-arrow.svg" alt="Void Genesis" />
    </div>
  )
}