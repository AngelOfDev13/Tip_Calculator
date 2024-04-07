import { useMemo } from "react";
import { OrderItems } from "../types";
import formatcurrency from "../helpers";

type TotalProps = {
    order: OrderItems[]
    propina: number
    saveOrder: () => void
}

const OrderTotal = ({ order, propina, saveOrder } : TotalProps) => {

    const subTotal = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])
    const totalPropina = useMemo(() => subTotal * propina, [propina, order])
    const total = useMemo(() => subTotal + totalPropina, [propina, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Total y Propina: </h2>
                <p>Subtotal a pagar: <span className="font-bold">{ formatcurrency(subTotal) }</span></p>
                <p>Propina: <span className="font-bold">{ formatcurrency(totalPropina) }</span></p>
                <p>Total a pagar: <span className="font-bold">{ formatcurrency(total) }</span></p>
            </div>

            <button
                className="w-full bg-emerald-600 hover:bg-emerald-400 uppercase p-4 text-white font-semibold mt-10"
                onClick={ saveOrder }>
                Guardar Orden
            </button>
        </>
    )
}

export default OrderTotal;