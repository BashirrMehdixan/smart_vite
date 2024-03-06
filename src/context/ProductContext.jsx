import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState(null);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => { setProducts(data) })
    }, [])
    if (products) {
        products.forEach(product => {
            if (!category.includes(product.category)) {
                category.push(product.category);
                setCategory(category);
            }
        })
    }
    return (
        <ProductContext.Provider value={products}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductProvider