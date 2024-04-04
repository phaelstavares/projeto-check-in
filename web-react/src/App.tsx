import { Header } from "./components/header";
import { Participantes } from "./components/participantes";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5">
      <Header />
      <Participantes />
    </div>
  )
}