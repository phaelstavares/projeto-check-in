import { Search, MoreHorizontal, ChevronsRight, ChevronsLeft, ChevronRight, ChevronLeft } from "lucide-react"

export function Participante() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>

                <div className="flex px-3 w-72 py-1.5 border border-white/10 rounded-lg items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
                </div>
            </div>

            <div className="border border-white/10 rounded-lg">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th style={{ width: 48 }} className="py-3 px-4 text-sm font-semibold text-left">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data de incrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
                            <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr className="border-b border-white/10 hover:bg-white/5">
                            <td  className="py-3 px-4 text-sm text-left text-zinc-300">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">542625</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                <div className="flex flex-col gap-1">
                                    <span className="flex font-semibold text-white">Diego Mendes Romanhol</span>
                                    <span>diego.romanhol45@gmail.com</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">7 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">3 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300"></td>
                            <td>
                                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                    <MoreHorizontal className="size-4" />
                                </button>
                            </td>
                        </tr>

                        <tr  className="border-b border-white/10 hover:bg-white/5">
                            <td  className="py-3 px-4 text-sm text-left text-zinc-300">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">542625</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                <div className="flex flex-col gap-1">
                                    <span className="flex font-semibold text-white">Diego Mendes Romanhol</span>
                                    <span>diego.romanhol45@gmail.com</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">7 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">3 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300"></td>
                            <td>
                                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                    <MoreHorizontal className="size-4" />
                                </button>
                            </td>
                        </tr>

                        <tr  className="border-b border-white/10 hover:bg-white/5">
                            <td  className="py-3 px-4 text-sm text-left text-zinc-300">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">542625</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                <div className="flex flex-col gap-1">
                                    <span className="flex font-semibold text-white">Diego Mendes Romanhol</span>
                                    <span>diego.romanhol45@gmail.com</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">7 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">3 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300"></td>
                            <td>
                                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                    <MoreHorizontal className="size-4" />
                                </button>
                            </td>
                        </tr>

                        <tr  className="border-b border-white/10 hover:bg-white/5">
                            <td  className="py-3 px-4 text-sm text-left text-zinc-300">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">542625</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                <div className="flex flex-col gap-1">
                                    <span className="flex font-semibold text-white">Diego Mendes Romanhol</span>
                                    <span>diego.romanhol45@gmail.com</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">7 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">3 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300"></td>
                            <td>
                                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                    <MoreHorizontal className="size-4" />
                                </button>
                            </td>
                        </tr>

                        <tr  className="border-b border-white/10 hover:bg-white/5">
                            <td  className="py-3 px-4 text-sm text-left text-zinc-300">
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">542625</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">
                                <div className="flex flex-col gap-1">
                                    <span className="flex font-semibold text-white">Diego Mendes Romanhol</span>
                                    <span>diego.romanhol45@gmail.com</span>
                                </div>
                            </td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">7 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300">3 dias atrás</td>
                            <td className="py-3 px-4 text-sm text-left text-zinc-300"></td>
                            <td>
                                <button className="bg-black/20 border border-white/10 rounded-md p-1.5">
                                    <MoreHorizontal className="size-4" />
                                </button>
                            </td>
                        </tr>

                    </tbody>

                    <tfoot>
                        <tr>
                            <td className="py-3 px-4 text-sm text-left" colSpan={3}>
                                Mostrando 10 de 228 itens
                            </td>
                            <td className="py-3 px-4 text-sm text-right" colSpan={4}>
                                <div className="inline-flex itens-center gap-8">
                                    <span>Página 1 de 23</span>
                                    
                                    <div className="flex gap-1.5">
                                        <td>
                                            <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                                <ChevronsLeft className="size-4" />
                                            </button>
                                        </td>
                                        <td>
                                            <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                                <ChevronLeft className="size-4" />
                                            </button>
                                        </td>
                                        <td>
                                            <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                                <ChevronRight className="size-4" />
                                            </button>
                                        </td>
                                        <td>
                                            <button className="bg-white/10 border border-white/10 rounded-md p-1.5">
                                                <ChevronsRight className="size-4" />
                                            </button>
                                        </td>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}