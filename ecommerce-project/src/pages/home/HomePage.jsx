import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header.jsx'
import { ProductsGrid } from './productsGrid.jsx'
import './HomePage.css'


export function HomePage({cart, loadCart}) {
    const [products, setProducts] = useState([ ]);
    

    useEffect(() => {
        const getHomeData = async () => {
        const responce = await axios.get('/api/products')
            setProducts(responce.data);
        };
        
        getHomeData();

        
    }, []);

    
    
    
    return (
        <>
            <title>Ecommerce Project</title>

            <Header cart={cart} />

            <div className="home-page">
                <ProductsGrid products={products} loadCart={loadCart} />
                
            </div>
        </>
    )
}