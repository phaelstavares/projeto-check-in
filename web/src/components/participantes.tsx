import { Search, MoreHorizontal, ChevronsRight, ChevronsLeft, ChevronRight, ChevronLeft } from "lucide-react"
import { IconButton } from "./icon-button"
import { Table } from "./table/table"
import { TableHeader } from "./table/table-header"
import { TableCell } from "./table/table-cell"
import { TableRow } from "./table/table-row"
import { ChangeEvent, useState } from "react"
import { attendees } from "../data/attendess"

export function Participantes() {
    const [valorDoInput, alteraOValorDoInput] = useState('')

    function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>) {
        alteraOValorDoInput(event.target.value)
    }
    
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text-2xl font-bold">Participantes</h1>

                <div className="flex px-3 w-72 py-1.5 border border-white/10 rounded-lg items-center gap-3">
                    <Search className="size-4 text-emerald-300" />
                    <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
                </div>

                {valorDoInput}
            </div>

                <Table>
                    <thead>
                        <tr className="border-b border-white/10">
                            <TableHeader style={{ width: 48 }}>
                                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
                            </TableHeader>
                            <TableHeader>Código</TableHeader>
                            <TableHeader>Participante</TableHeader>
                            <TableHeader>Data de incrição</TableHeader>
                            <TableHeader>Data do check-in</TableHeader>
                            <TableHeader style={{ width: 64 }}></TableHeader>
                        </tr>
                    </thead>

                    <tbody>
                        {attendees.map((attendee) => {
                            return (
                                <TableRow key={attendee.id}>
                                    <TableCell>
                                        <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
                                    </TableCell>
                                    <TableCell>{attendee.id}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-col gap-1">
                                            <span className="flex font-semibold text-white">{attendee.name}</span>
                                            <span>{attendee.email}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{attendee.createdAt.toISOString()}</TableCell>
                                    <TableCell>{attendee.checkedInAt.toISOString()}</TableCell>
                                    <TableCell></TableCell>
                                    <td>
                                        <IconButton transparent={true}>
                                            <MoreHorizontal className="size-4" />
                                        </IconButton>
                                    </td>
                               </TableRow>
                            )
                        })}
                    </tbody>

                    <tfoot>
                        <tr>
                            <TableCell colSpan={3}>
                                Mostrando 10 de 228 itens
                            </TableCell>
                            <TableCell className="text-right py-3 px-4" colSpan={4}>
                                <div className="inline-flex itens-center gap-8">
                                    <span>Página 1 de 23</span>
                                    
                                    <div className="flex gap-1.5">
                                        <td>
                                            <IconButton>
                                                <ChevronsLeft className="size-4" />
                                            </IconButton>
                                        </td>
                                        <td>
                                            <IconButton>
                                                <ChevronLeft className="size-4" />
                                            </IconButton>
                                        </td>
                                        <td>
                                            <IconButton>
                                                <ChevronRight className="size-4" />
                                            </IconButton>
                                        </td>
                                        <td>
                                            <IconButton>
                                                <ChevronsRight className="size-4" />
                                            </IconButton>
                                        </td>
                                    </div>
                                </div>
                            </TableCell>
                        </tr>
                    </tfoot>
                </Table>
        </div>
    )
}