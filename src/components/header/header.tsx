import Image from "next/image";
import Maps from "../../../public/maps.png";
import { Button } from "../ui/button";
import { GithubIcon, PanelLeft } from "lucide-react";
import { HeaderSheet } from "../header-sheet";
import { ModeToggle } from "../mode-toggle";
export default function Header() {
  return (
    <header className="flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-4">
        <Image src={Maps} alt="Icone de mapa" width={35} />
        <span className="text-2xl font-bold text-yellow-300 underline underline-offset-8">
          Fui De CEP
        </span>
      </div>
      <nav className="flex items-center gap-8">
        <HeaderSheet>
          <PanelLeft size={18} />
        </HeaderSheet>
        <a
          target="_blank"
          href="https://github.com/euvitordev/fui-de-cep/"
          className="max-lg:hidden"
        >s
          <Button className="flex items-center justify-between gap-4 rounded-xl border-2 border-yellow-300 bg-yellow-300 p-6 font-bold text-black shadow-2xl shadow-zinc-500/10 duration-700 hover:bg-transparent hover:text-white hover:shadow-yellow-300/10">
            Contribuir
            <GithubIcon />
          </Button>
        </a>
      </nav>
    </header>
  );
}
