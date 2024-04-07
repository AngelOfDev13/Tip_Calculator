import type { MenuItems } from "../types";


type MenuProps = {
    items: MenuItems
    addItem: (item: MenuItems) => void
}

const MenuItem = ({ items, addItem } : MenuProps) => {
    return (
      
        <button 
            className="flex justify-between hover:bg-emerald-600 hover:text-white border-2 border-emerald-600 w-full p-3"
            onClick={() => addItem(items)}>

            <p className="inline-block">{items.name}</p>
            <p className="inline-block font-black">${items.price}</p>

        </button>

    )
}

export default MenuItem;