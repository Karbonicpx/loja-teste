import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { getProducts } from "../backend/api";
import ShopHeader from '../components/ShopHeader'
import './HomePage.css'

type Product = {
    id: number;
    title: string;
    price: number;
    thumbnail: string;
}

function HomePage() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Home'
        getProducts().then(setProducts);
    }, []);

    return (
        <>
            <ShopHeader />

            <div className="products-grid">
                {products.map((product: Product) => (
                    <div 
                    key={product.id} 
                    className="product-card" 
                    onClick={() => navigate(`/product/${product.id}`)}>
                        <img src={product.thumbnail} />
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default HomePage;