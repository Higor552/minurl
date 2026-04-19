import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";
export default function Home() {
  return (
    <div className="font-dudu">
      
        <section className="w-full py-24 md:py-32 lg:py-48 bg-linear-to-r from-pink-200 via-orange-200 to-blue-400 text-black flex flex-col items-center text-center px-4 border-b">
          <h1 className=" text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider mb-6 text-black">
            Cada Escolha Importa.
          </h1>
          <p className="max-w-750px text- text-lg md:text-xl mb-10 ">
            Registe as suas decisões, 
            compare o sua moral com milhares de jogadores.
          </p>

        </section>
        <section className="w-full py-20 bg-linear-to-r from-pink-200 via-orange-200 to-blue-400 flex flex-col items-center px-4">
        <div className="max-w-3xl w-full text-center space-y-8">
          <div >
            <h2 className="text-3xl font-bold tracking-tight">Comece sua análise</h2>
            <p className="text-muted-foreground">
              Procure pelo título que você terminou recentemente para registrar suas escolhas.
            </p>
          </div>

          <div className=" w-full max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-zinc-400" />
            <Input 
              type="text" 
              placeholder="Ex: Life is Strange, The Walking Dead..." 
              className="pl-10 h-14 text-lg border-2 border-zinc-200 rounded-full "
            />
          </div>

        </div>
      </section>
    </div>
  );
}
