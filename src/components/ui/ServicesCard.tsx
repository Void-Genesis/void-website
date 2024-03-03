import Check from "../icons/Check";

type ServiceCardProps = {
  title: string;
  itemList: string[];
  price: number;
  isFlexCore?: true;
};

export default function ServicesCard({
  title,
  itemList,
  price,
  isFlexCore,
}: ServiceCardProps) {
  const formattedPrice = price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <>
      <div
        className={`w-[360px] h-[700px] ${isFlexCore ? "bg-void-blue" : "bg-void-white"} rounded-xl shadow-service-card p-4 flex flex-col justify-between hover:scale-105 transition duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center">
          <p
            className={`${isFlexCore ? "text-void-white" : "text-void-primary-black"} font-bold tracking-widest text-sm`}
          >
            PLANO
          </p>
          <h1
            className={`${isFlexCore ? "text-void-white" : "text-void-primary-black"} font-medium`}
          >
            {title}
          </h1>
        </div>
        <div>
          <ul>
            {itemList.map((title, index) => (
              <li key={index}>
                <div className="flex p-1">
                  <Check />
                  <span
                    className={`${isFlexCore ? "text-void-white" : "text-void-primary-black"} ml-2`}
                  >
                    {title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex flex-col items-center bg-void-custom-dark-400 rounded-xl p-4">
          <div className="flex flex-col justify-between items-center gap-2">
            <div>
              <span className="text-md font-thin">
                {isFlexCore ? "A partir de:" : "Pagamento único:"}
              </span>
            </div>
            <div>
              <span className="text-5xl font-semibold">{formattedPrice}</span>
            </div>
            <div>
              <span className="text-lg font-thin">
                Prazo de entrega: 30 dias
              </span>
            </div>
            <div className="w-full">
              <button
                onClick={() => {
                  window.open(
                    "https://api.whatsapp.com/send?phone=5541999008755",
                    "_blank",
                  );
                }}
                className={`bg-void-soft-white w-full py-4 rounded-xl ${isFlexCore ? "hover:bg-void-orange" : "hover:bg-void-blue"} text-void-primary-black font-medium hover:text-void-white transition duration-300 ease-in-out`}
              >
                Quero saber mais
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
