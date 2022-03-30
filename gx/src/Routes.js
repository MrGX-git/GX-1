
import { lazy, Suspense } from 'react'
import { Routes as Routers, Route } from 'react-router-dom'

import { Loader } from './atoms'
import { Layout } from './components/layout'
import { Home } from './pages/home'
import { Login } from './pages/login'
import { Registr } from './pages/registr/Registr'
import { NoPages } from './pages/NoPages'
import * as routes from './utilit/RoutePath'

const Product = lazy(()=>import('./pages/product'))
const ShopingCard = lazy(()=>import('./pages/shoping-card'))


export const Routes =()=> {
    return (
        <Routers>
          <Route element={ <Layout /> }>
            <Route path={routes.HOME_PATH} index element={<Home />} />
            <Route path={routes.PRODUCT_PATH} element={
              <Suspense fallback={ <Loader message='Product Loading....'/> }>
                <Product />
              </Suspense>
            } />
            <Route path={routes.SHOPPING_CART_PATH} element={
              <Suspense fallback={ <Loader message='Card Loading...'/> }>
                <ShopingCard />
              </Suspense>
            } />
            <Route path={routes.LOGIN_PATH} element={ <Login /> }/>
            <Route path={routes.REGISTR_PATH} element={ <Registr /> }/>
            <Route path={routes.NOPAGES_PATH} element={ <NoPages /> }/>
          </Route>
        </Routers>
    )
}

Routes.displayName='AppRoutes'