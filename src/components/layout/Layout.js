import { Outlet } from 'react-router-dom'

import { Header } from '../header'
import { Footer } from '../footer'

const sizes = {
    default: 'container',
    fluide:  'container-fluid',
    sm: 'container-sm'
};

export const Layout =({ className, size = 'default' })=> {
  return (
    <div className={`${sizes[size]} ${className}`}>
        <Header />
        <div 
          className='my-3'
          style={{
            minHeight: '500px'
          }}
        >
          <Outlet />
        </div>
        <Footer />
    </div>
  );
};