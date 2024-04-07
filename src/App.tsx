import { menuItems } from "./data/db";
import MenuItem from "./components/MenuItem";
import useOrder from "./hooks/useOrder";
import Consumo from "./components/Consumo";
import OrderTotal from "./components/OrderTotal";
import Propina from "./components/Propina";

const App = () => {

  const { addItem, order, deleteOrder, propina, setPropina, saveOrder } = useOrder()

  return(
    <>
    <header className="bg-emerald-600 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
    </header>

    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      
      <div className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-10">
            {menuItems.map(items => (
      
                <MenuItem 
                  key={ items.id }
                  items={ items }
                  addItem={ addItem } />

            ))}
        </div>
      </div>

      <div className=" border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <Consumo
            order={ order }
            deleteOrder={ deleteOrder } />
            { order.length > 0 ? 
            <>
              <Propina
              setPropina={ setPropina } />
              <OrderTotal 
              propina={ propina }
              order={ order }
              saveOrder={ saveOrder }/>
            </> : ''
            }
      </div>

    </main>
    </>
  )
}

export default App;