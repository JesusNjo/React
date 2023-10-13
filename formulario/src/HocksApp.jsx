
import { FormularioComponent } from "./components/FormularioComponent"
export const HocksApp = ({name}) => {
  return (
    <>
    <h1>{name}</h1>
    <hr/>
    <FormularioComponent/>
    </>
  )
}
