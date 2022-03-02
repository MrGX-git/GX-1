import { useState } from 'react';

import productData from '../../product.json'

export const ProductItem =({producti})=> {
    return (
        <div>
            <h3>
                {producti.name}, ღირებულება - ${producti.price}
            </h3>
            <h5>
                {producti.stock ? 'აქანაა' : 'არაა აქანააა'}, კატეგორია - {producti.category}
            </h5>
        </div>
    );
};

export const Product =()=> {
    const [inStockOnly, setInStockOnly] = useState(false);
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
            data = productData.filter((item) => item.stock);
        }
        return data.map((item, index) => {
            return <ProductItem producti={item} key={index} />;
        });
    };
    return (
        <div className="row shadow my-3 p-3">
            <h3>Product</h3>
            <button className="btn btn-outline-success" onClick={()=> setInStockOnly(!inStockOnly)}>
                რამდენი დარჩა ჯიგარო
            </button>
            <hr />
            {renderProduct()}
        </div>
    )
}