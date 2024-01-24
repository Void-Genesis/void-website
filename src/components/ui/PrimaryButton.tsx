

export default function PrimaryButton({ text }: { text: string }) {
    return (
        <div className="w-full flex items-center justify-center bg-void-blue rounded-[3px] py-5 px-8">
            <div className="text-sm font-semibold pr-2">
                {text}
            </div>

            <img className="bg-red-500 rounded-md items-center justify-center h-6" src="/icon-button-arrow.svg" alt="Void Genesis" />
        </div>
    )
}