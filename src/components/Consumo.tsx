import formatcurrency from "../helpers";
import { MenuItems, OrderItems } from "../types";

type OrdenProps = {
    order: OrderItems[]
    deleteOrder: (id: MenuItems['id']) => void
}

const Consumo = ({ order, deleteOrder } : OrdenProps) => {
    return(
        <div>
            <h2 className="font-black text-4xl">Factura</h2>
            <div className="space-y-3 mt-10">
                {order.length === 0 ? 
                <p className="text-center">La orden esta vacia</p> : 
                order.map(orderItem => (
                    <div 
                    className="flex justify-between border-t border-gray-300 py-5 last-of-type:border-b"
                    key={ orderItem.id}>
                        <div>
                            <p className="text-lg">
                                {orderItem.name} - {formatcurrency(orderItem.price)}
                            </p>
                            <p className="font-black">
                                Cantidad: {orderItem.quantity} - {formatcurrency(orderItem.price * orderItem.quantity)}
                            </p>
                        </div>
                        <div>
                            <button 
                            className="bg-red-600 h-8 w-8 font-bold rounded-full text-white"
                            onClick={() =>  deleteOrder(orderItem.id) }>
                                X
                            </button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Consumo;