import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <header className="border-b bg-blue-300 w-full">
            <div className="flex h-16 items-center px-4 md:px-8 justify-between font-dudu">

                
                <div className="flex items-center gap-4">
                    <Button variant="ghost"  className="font-medium ">
                        <Link href="/login">Entrar</Link>
                    </Button>
                    <Button asChild className="font-medium px-6">
                        <Link href="/cadastro">Cadastrar</Link>
                    </Button>
                </div>

                
                <div className="flex items-center">
                    <h1 className="text-2xl font-bold tracking-tight ">
                        O Efeito Borboleta
                    </h1>
                </div>

            </div>
        </header>
    )
}