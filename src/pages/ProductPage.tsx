import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../backend/api";
import ShopHeader from '../components/ShopHeader'
import './ProductPage.css'


type Product = {
    title: string;
    price: number;
    description: string;
    thumbnail: string;
}

function ProductPage() {
    const { id } = useParams();
    const [product, setProduct] = useState<Product>();

    useEffect(() => {
        document.title = 'Product'
        if (id) {
            getProductById(id).then(setProduct);
        }
    }, [id]);

    // Colocando isso para evitar erro de product undefined
    if (!product) return <p>Loading...</p>;

    return (
        <>
            <ShopHeader />

            <div className="product-page">
                <div className="product-container">

                    <div className="product-image">
                        <img src={product.thumbnail} />
                    </div>

                    <div className="product-info">
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <div className="product-price">${product.price}</div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ProductPage;