
import { useEffect } from 'react'
import { ProductTable } from '../../components/table'
import { Loader } from '../../atoms'
import { useRequireAuth } from '../../hooks'

export const ShopingCard =(props)=> {
    const auth = useRequireAuth()
    
    useEffect (()=> {
        console.log("AJAX Requesr, starter")
        const timerId = setTimeout(() => {
            console.log('AJAX Request, finished')
        }, 5000)
        return () => {
            // CleanUp Function
            clearTimeout(timerId)
        }
    }, [])

    if ( !auth) {
      return <Loader />
    }
    return (
        <div className="row">
            <h4>Shopping Cart</h4>
            <div className='col-12'>
              <ProductTable />
            </div>
        </div>
    )
}