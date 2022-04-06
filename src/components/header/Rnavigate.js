
import { Form } from '../../atoms/Form'
import { NavLink } from 'react-router-dom'
import { Button } from '../../atoms'
import { useAuthProvider } from '../../providers/AuthProvider'
import { useCart } from '../../providers/CartProvider'
import { LOGIN_PATH, REGISTR_PATH, PROFILE_PATH  } from '../../utilit'

export const Rnavigate =()=> {
    const { user, logOut } = useAuthProvider()
    const { resetBucket } = useCart()
    
    const renderGuestNavLink =()=> {
      return (
        <>
        <li className="nav-item"> 
            <NavLink 
              className="nav-link" 
              to={LOGIN_PATH}
            >
              Login🛌
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to={REGISTR_PATH}>
              SingUp⤴
            </NavLink>
        </li>
        </>
      )
    }

    const renderUserNavLink =()=> {
      return (
        <>
          <li className="nav-item">
              <NavLink className="nav-link" to={PROFILE_PATH}>
                Profile 
              </NavLink>
          </li>
          <li className='nav-link'>
              <Button 
                className='btn btn-link nav-link'
                onClick={()=>{
                  logOut()
                  resetBucket()
                }}
              >
                Log Out
              </Button>
          </li>
        </>
      )
    }

    return (
      <Form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        <ul className="navbar-nav mb-3 mb-lg-0">
          {user ? renderUserNavLink() : renderGuestNavLink()}
        </ul>
      </Form>
    )
}