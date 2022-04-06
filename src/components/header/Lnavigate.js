
import { NavLink, Link } from 'react-router-dom'
import { useCart } from '../../providers/CartProvider'
import { HOME_PATH, PRODUCT_PATH, SHOPPING_CART_PATH} from '../../utilit'

export const Lnavigate =()=> {
    const {cart} = useCart()
    console.log("--CART--", cart)
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to={HOME_PATH}>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={PRODUCT_PATH}> პროდუქტები </NavLink>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={SHOPPING_CART_PATH}>
            <span className='font-weight-bold'>CARD TOTAL </span> : {''}
              <span>{cart.total === 0 ? '🤑 Empty ' : `${Math.round(cart.total)}💲`}</span>
          </Link>
        </li>
      </ul>
    )
}