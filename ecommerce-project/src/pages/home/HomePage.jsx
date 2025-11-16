import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header.jsx'
import { ProductsGrid } from './productsGrid.jsx'
import './HomePage.css'


export function HomePage({cart}) {
    const [products, setProducts] = useState([ ]);
    

    useEffect(() => {
        axios.get('/api/products')
        .then((responce) => {
            setProducts(responce.data)
        });

        
    }, []);

    
    
    
    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} />
                
            </div>
        </>
    )
}