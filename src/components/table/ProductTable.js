
import { useCart } from "../../providers/CartProvider"
import { ProductTableRow } from './ProductTableRow'

export const ProductTable =()=> {
    const { addNewItem, removeItem, cart } = useCart()
    //console.log(cart)
    //console.log(Object.entries(cart))
    const renderProduct =()=> {
        const cartItems = Object.entries(cart.item)
        if(cartItems.length === 0) {
            return (
                <tr>
                    <td colSpan='5'>
                        <h2 className="text-center"> Cart Empty</h2>
                    </td>
                </tr>
            )
        }
        return cartItems.map(([productId, item]) => {
            const currentItem = {
                ...item,
                id: productId
            }
          return <ProductTableRow 
            key={`product-${productId}`} 
            {...item} 
            id={+productId}
            onCardAdd={() => addNewItem(currentItem)}
            onCardRemove={() => removeItem(currentItem)}
          />
        })
    }
    return (
        <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">დასახელება</th>
            <th scope="col">ფასი</th>
            <th scope="col">რაოდენობა / სულ</th>
            <th scope="col">მოქმედება</th>
          </tr>
        </thead>
        <tbody>
            {renderProduct()}
        </tbody>
      </table>
    )
}