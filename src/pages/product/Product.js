import { useState, useEffect } from 'react';
// import debounce from 'lodash/debounce';

import { ProductItem } from './ProductItem';
import { Button, TextInput, Form } from '../../atoms';
import { Collabsible } from '../../components/collabsible';
import { useLocalStorage, useDebounce } from '../../hooks';
import productData from '../../product.json';


export const Product =()=> {
    const [ inStockOnly, setInStockOnly ] = useState(false);
    const [ result, setResult ] = useState(productData.slice())
    const [ filterTerm, setFilterTerm ] = useLocalStorage('super-app: filter-term', '');
    const pausedSearch = useDebounce(filterTerm, 400)
    // const renderProduct =()=> {
    //     const rows = [];
    //     let lastCategory = null;
    //     productData.forEach(product =>{
    //         if()
    //     })
    // }
    useEffect(() => {
        if( pausedSearch ) {
            const data = productData.filter((el) => 
            el.name.toLowerCase().includes(pausedSearch.toLowerCase()))
            setResult(data)
        } else {
            setResult(productData.slice())
        }
    },[pausedSearch])
    
    console.log('__Product__Render__')

    const renderProduct =()=> {
        let data = result.slice()
        if( inStockOnly ) {
            data = result.filter((item) => item.stock)
        }
        return data.map((item, index) => {
            return <ProductItem producti={item} key={index} />
        })
    }

    const hendleFilterChange = ({ target })=> {
        setFilterTerm(target.value)
      }
      
    return (
        <div className="row shadow my-3 p-3">
            <h3>Product</h3>
            <Form className='my-2 p-1'>
                <div className='my-3 row'>
                    <div className='col-8'>
                        <h4> filter {filterTerm}</h4>
                        <TextInput 
                          value = {filterTerm} 
                          onChange = {hendleFilterChange}
                          placeholder = 'ძიება...'
                        /> 
                    </div>
                    <div className='col-2 p-4'>
                        <Button 
                          className="btn btn-outline-success"
                          type='button' 
                          onClick={()=> setInStockOnly(!inStockOnly)}
                        >
                            {inStockOnly ? 'გამოუშვი რამდენია 🪃' : 'ესარის ჯიგარო სულ 🥇'}
                        </Button>
                    </div>
                </div>
            </Form>
            <hr /> 
            <Collabsible 
              closedTitle='⇣ ⇣ ⇣ მანჩვენე პროდუქცია ⇣ ⇣ ⇣' 
              oependTitle='⇡ ⇡ ⇡ დამალე პროდუქცია ⇡ ⇡ ⇡'
            >
              <div className='d-flex flex-wrap justify-content-between'>
                {renderProduct()}
              </div>
            </Collabsible>
            
        </div>
    )
}