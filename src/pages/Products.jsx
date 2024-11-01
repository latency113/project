import React from 'react';
import Cardprod from '../components/Cardprod';
import { Link } from 'react-router-dom';
import { products } from '../Data';

const Products = () => {
    return (
        <div className="p-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {products.map((product) => (
                    <div key={product.name} className="w-full">
                        <Link to={`/product/${product.name}`}></Link>
                        <Cardprod {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
