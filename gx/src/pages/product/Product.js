import { useState } from 'react';
// import debounce from 'lodash/debounce';

import { ProductItem } from './ProductItem';
import { Button, TextInput, Form } from '../../atoms';
import { Collabsible } from '../../components/collabsible';
import productData from '../../product.json';


export const Product =()=> {
    const [inStockOnly, setInStockOnly] = useState(false);
    const [ filterTerm, setFilterTerm ] = useState('');
    // const renderProduct =()=> {
    //     const rows = [];
    //     let lastCategory = null;
    //     productData.forEach(product =>{
    //         if()
    //     })

    // }


    const renderProduct =()=> {
        let data = productData.slice()
        if(inStockOnly) {
            data = data.filter((item) => item.stock);
        }
        if( filterTerm ) {
            data = data.filter((el) => el.name.includes(filterTerm));
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
                        <h4> filter - {filterTerm}</h4>
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