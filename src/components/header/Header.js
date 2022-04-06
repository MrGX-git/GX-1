
import { Link } from 'react-router-dom'

import { Lnavigate } from './Lnavigate'
import { Rnavigate } from './Rnavigate'

import './header.css'

export const Header =()=> {
  return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <Lnavigate />
              <Rnavigate />
            </div>
          </div>
        </nav>
      </header>
  );
};