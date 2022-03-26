
import { createContext, useContext } from "react";
import { useLocalStorage } from '../../hooks/useLocalStorage'

export const CartContext = createContext({
  total: 0,
  item: {}
})
CartContext.displayName = 'CartContext'

export const CartProvider = ({children}) => {
  const[cart, setCart] = useLocalStorage("super-app: shoping-cart",{
    total: 0,
    item: {}
  })
  const addNewItem =(product)=> {
    console.log(product)
    setCart((prev)=> {
      let newItem
      if(prev.item[product.id]) {
        const cardProduct = prev.item[product.id]
        newItem = {
          ...cardProduct,
          qty: cardProduct.qty + 1
        }
      }else {
        newItem = {
          price: product.price,
          name: product.name,
          qty: 1
        }
      }
      return {
        ...prev,
        total: prev.total + product.price,
        item: {
          ...prev.item,
          [product.id]: newItem
        }
      }
    })
  }
  const removeItem =(product)=> {
    setCart((prev)=> {
      let newItem = {...prev.item}
      let total = prev.total
      if(prev.item[product.id]) {
        const cardProduct = prev.item[product.id]
        if(cardProduct.qty > 1) {
          newItem = {
            ...prev.item,
            [product.id]: {
              ...cardProduct,
              qty: cardProduct.qty - 1,
            },
          }
          total -= product.price
        } else {
          total -= product.price
          delete newItem[product.id]
        }
      }

      return {
        ...prev,
        total,
        item: newItem
      }
    })
  }
  return (
    <CartContext.Provider 
      value={{
        cart, 
        addNewItem, 
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart =()=> {
  const cart = useContext(CartContext)
  if(!cart) {
    throw SyntaxError('CartProvider is not definded')
  }
  return cart
}