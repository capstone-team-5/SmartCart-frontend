// This function will allow users to search for grocery items

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CartLengthComponent from "./CartLengthComponent";

const SearchComponent = ({addToCart}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [clickedProduct, setClickedProduct] = useState(false);
    const [cartLength, setCartLength] = useState(0);

    useEffect(() => {
        if (searchQuery) {
            axios.get(`${process.env.REACT_APP_BACKEND_API}/products`)
                .then((response) => {
                    console.log(response.data)
                    const items = response.data;
                    const foundItems = items.filter((item) =>
                        item.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.product_category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.product_brand.toLowerCase().includes(searchQuery.toLowerCase())
                    );
                    setProducts(foundItems);
                })
                .catch((error) => console.log(error))
        } else {
            setProducts([]);
        }
        setClickedProduct(false);
    }, [searchQuery])

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
        setClickedProduct(false);
    };

    const handleProductClicked = () => {
        setSearchQuery('');
        setClickedProduct([]);
        setClickedProduct(true);
        setCartLength(cartLength + 1);
    }
    
    return (
        <div>
            <input type='search' placeholder='Search for a product...' value={searchQuery} onChange={handleSearchChange} />
            {products.length > 0 ? (
                <div>
                    {products.map((product) => (
                        <div key={product.product_id}>
                            <Link to={`/product/${product.product_id}`} onClick={handleProductClicked}>
                                <strong><h3>{product.product_name}</h3></strong>
                                {!clickedProduct && <img src={product.product_image} alt={product.product_name} width='150px'/>}
                            </Link>
                            <button onClick={() => addToCart(product)}>Add To Cart</button>
                            <br/> <br />
                        </div>
                    ))}
                </div>
            ) : <div>{searchQuery && !clickedProduct ? 'This product does not exist.' : null}</div>}
            <CartLengthComponent cartLength={cartLength} />
        </div>
    );
};

export default SearchComponent;
