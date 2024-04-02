import { Search } from "lucide-react"

export function Participante() {
    return (
        <div>
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>

                <div className="flex px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none" placeholder="Buscar participante..." />
                </div>
            </div>

            
        </div>
    )
}