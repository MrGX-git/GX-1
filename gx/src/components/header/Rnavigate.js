
import { Form } from '../../atoms/Form'
import { NavLink } from 'react-router-dom'
import { LOGIN_PATH, REGISTR_PATH} from '../../utilit'

export const Rnavigate =()=> {
    return (
      <Form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
        <ul className="navbar-nav mb-3 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to={LOGIN_PATH}>Login🛌</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={REGISTR_PATH}>SingUp⤴️</NavLink>
          </li>
        </ul>
      </Form>
    )
}