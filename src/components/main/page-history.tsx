import { History, MapPin } from "lucide-react";

export default function PageHistory() {
  const historyMaps = [
    {
      cepNumber: "22060-030",
      cepLocal: "Rio de Janeiro - RJ",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
    {
      cepNumber: "CEP",
      cepLocal: "Cidade - Estado",
    },
  ];
  return (
    <div className="flex h-full w-full max-w-2xl flex-col items-start justify-start gap-12 rounded-r-xl border-l-4 border-zinc-900 bg-zinc-800 p-6 max-lg:max-w-full max-lg:rounded-none max-lg:border-l-0 max-lg:border-t-4">
      <div className="flex flex-col gap-2">
        <h2 className="flex items-center gap-4 text-2xl font-bold">
          <History />
          Histórico
        </h2>
        <p className="">Em breve seus resultados ficaram aqui</p>
        <span className="">Segue exemplo abaixo:</span>
      </div>

      <div className="flex max-h-[650px] w-full flex-col gap-4 overflow-y-auto">
        {historyMaps.map((item, index) => (
          <div
            key={index}
            className="mr-8 flex cursor-pointer items-center justify-between rounded-xl bg-yellow-300 p-4 text-xl font-bold text-black transition-all delay-75 duration-100 ease-in hover:bg-yellow-300/70 max-lg:text-sm"
          >
            <div className="flex items-center gap-4">
              <MapPin />
              <span className="">{item.cepNumber}</span>
            </div>
            <span className="">{item.cepLocal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
