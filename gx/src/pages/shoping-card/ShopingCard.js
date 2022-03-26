
import { useEffect } from 'react'
import { ProductTable } from '../../components/table'

export const ShopingCard =(props)=> {
    
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
    return (
        <div className="row">
            <h4>Shopping Cart</h4>
            <div className='col-12'>
              <ProductTable />
            </div>
        </div>
    )
}