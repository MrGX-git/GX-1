import { useState } from 'react'
import PropTypes from 'prop-types'

import { useCart } from '../../providers/CartProvider'
import { Alert, Button } from '../../atoms'

import './ProductItem.css'

export const ProductItem =({producti})=> {
    const { 
        addNewItem, 
        removeItem, 
        cart: {item: cardItem}
    } = useCart()

    const [outOfStock, setOutOfStock] = useState(false)

    const handleAddCart =()=> {
        if(producti.stock) {
          addNewItem(producti)
        } else {
            setOutOfStock(true)
        }
        if(!producti) {
          return null
        }
    }
    const inCart = producti.id in cardItem
    
    return (
        <div className="card mb-2 productItem--card">
            <h5 className="card-header">
                {producti.name}, ფასი - ${producti.price}
            </h5>
            <div className="card-body">
                <div className='d-flex flex-column'>
                    {outOfStock && <Alert message='დამატება შეუძლებელია' />}
                    <h5>
                        {producti.stock ? 'გაყიდვაშია' : 'არ გვაქვს'}
                    </h5>
                    <h4>კატეგორია - {producti.category}</h4>
                </div>
                <h5 className='text-muted'>
                    {inCart ? `კალათაშია: ${cardItem[producti.id].qty} ც` : 'არ არის კალათაში 🚫'}
                </h5>
                <div className='btn-group'>
                    <Button 
                        className='btn btn-outline-success' 
                        onClick={handleAddCart}
                        disabled={outOfStock}
                    >
                        ADD TO CARD  🛒 
                    </Button>
                    <Button 
                        className='btn btn-outline-danger' 
                        onClick={()=> removeItem(producti)} 
                        disabled={!inCart}
                    >
                        Remove ON CARD  🗑 
                    </Button>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    producti: PropTypes.object.isRequired
}