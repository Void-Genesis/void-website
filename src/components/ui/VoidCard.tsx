export default function VoidCard() {
    return (
        <div className="flex justify-center pt-16">

            <div className="relative w-[241px] h-[241px] group p-[42px]">
                <div className="flex justify-center items-center border-[0.471px] border-[#2E303B] rounded-[3.47px] right-[0px] top-0 absolute z-30 bg-gradient-to-br from-void-custom-dark-100 to-void-custom-dark-200 w-[241px] h-[241px]" >
                    <img className="w-[157px] h-[157px] group-hover:hidden" src="/logo-void-orange.svg" alt="Void Genesis" />
                    <img className="w-[157px] h-[157px] hidden group-hover:block" src="/logo-void-blue.svg" alt="Void Genesis" />
                </div>

                <div className="border-[0.471px] border-void-grey-300 rounded-[3.47px] left-[8px] top-0 absolute z-20 bg-gradient-to-br from-void-custom-dark-300 to-void-custom-dark-400 w-[241px] h-[241px]" />

                <div className="border-[0.471px] border-void-grey-100 rounded-[3.47px] left-[16px] top-0 absolute bg-gradient-to-br from-void-custom-dark-200 to-darkblue-200 w-[241px] h-[241px]" />
            </div>
        </div>
    )
}