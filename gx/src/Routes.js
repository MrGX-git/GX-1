
import { Routes as Routers, Route } from 'react-router-dom'

import { Home } from './pages/home'
import { Product } from './pages/product'
import { ShopingCard } from './pages/shoping-card'
import { NoPages } from './pages/NoPages'

export const Routes =()=> {
    return (
        <div>
          <Routers>
            <Route path='/' index element={<Home />} />
            <Route path='/product' element={<Product />} />
            <Route path='/shoping-cart' element={ <ShopingCard /> } />

            <Route path='*' element={ <NoPages /> }/>
          </Routers>
        </div>
    )
}

Routes.displayName='AppRoutes'