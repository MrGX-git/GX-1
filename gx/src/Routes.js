
import { lazy, Suspense } from 'react'
import { Routes as Routers, Route } from 'react-router-dom'

import { Loader } from './atoms'
import { Home } from './pages/home'
import { NoPages } from './pages/NoPages'

const Product = lazy(()=>import('./pages/product'))
const ShopingCard = lazy(()=>import('./pages/shoping-card'))


export const Routes =()=> {
    return (
        <div>
          <Routers>
            <Route path='/' index element={<Home />} />
            <Route path='/product' element={
              <Suspense fallback={ <Loader message='Product Loading....'/> }>
                <Product />
              </Suspense>
            } />
            <Route path='/shoping-cart' element={
              <Suspense fallback={ <Loader message='Card Loading...'/> }>
                <ShopingCard />
              </Suspense>
            } />

            <Route path='*' element={ <NoPages /> }/>
          </Routers>
        </div>
    )
}

Routes.displayName='AppRoutes'