
import { Link } from "react-router-dom"

export const NoPages =()=> {
    return (
      <div>
          <h2>Error 404, NO PAGES</h2>
          <p>
              <Link to='/'>go to home page</Link>
          </p>
      </div>
    )
}