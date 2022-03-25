
import { useEffect, useState } from 'react'
import { ProductTable } from '../../components/table'

export const ShopingCard =(props)=> {
    const [value, setValue] = useState()
    useEffect (()=> {
        console.log("AJAX Requesr, starter")
        const timerId = setTimeout(() => {
            console.log('AJAX Request, finished')
            setValue(Math.random())
        }, 5000)
        return () => {
            // CleanUp Function
            clearTimeout(timerId)
        }
    }, [])
    return (
        <div className="row">
            <h4 onClick={() => setValue(Math.random())}>Shopping Cart</h4>
            <div className='col-12'>
              <ProductTable />
            </div>
        </div>
    )
}