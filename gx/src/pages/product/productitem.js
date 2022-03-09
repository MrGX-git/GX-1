
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