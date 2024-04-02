import { Header } from "./components/header";
import { Participante } from "./components/participante";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <Participante />
    </div>
  )
}