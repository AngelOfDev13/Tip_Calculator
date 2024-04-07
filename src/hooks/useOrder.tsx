import { useState } from "react"
import type { MenuItems, OrderItems } from "../types"

const useOrder = () => {

    const [ order, setOrder ] = useState<OrderItems[]>([])
    const [ propina, setPropina ] = useState(0)

    const addItem = (item : MenuItems) => {

        const itemExist = order.find(orderItem => orderItem.id === item.id)

        if(itemExist) {
            const updaterdOrder = order.map(updatedItem => updatedItem.id === item.id ? 
                {...updatedItem, quantity: updatedItem.quantity + 1 }
                : updatedItem)

            setOrder(updaterdOrder)
            
        } else {
            const newItem = {...item, quantity: 1}
            setOrder([...order, newItem])
        }
    }

    const deleteOrder = (id: MenuItems['id']) => {
        const orderDelete = order.filter( item => item.id !== id)
        setOrder(orderDelete)
    }

    const saveOrder = () => {
        setOrder([])
        setPropina(0)
    }
    
    return {
        addItem,
        order,
        deleteOrder,
        propina,
        setPropina,
        saveOrder
        
    }
}

export default useOrder