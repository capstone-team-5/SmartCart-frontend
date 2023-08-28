// This function will allow users to search for grocery items

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const SearchComponent = ({addToCart}) => {

    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [clickedProduct, setClickedProduct] = useState(false);

    useEffect(() => {
        if (searchQuery) {
            axios.get(`${process.env.REACT_APP_BACKEND_API}/products`)
                .then((response) => {
                    console.log(response.data)
                    const items = response.data;
                    const foundItems = items.filter((item) => 
                        item.product_name.toLowerCase().includes(searchQuery.toLowerCase())
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
    }
    
    return (
        <div>
            <input type='search' placeholder='Search for a product...' value={searchQuery} onChange={handleSearchChange} />
            {products.length > 0 ? (
                <div>
                    {products.map((product) => (
                        <div key={product.product_id}>
                            <Link to={`/products/${product.product_id}`} onClick={handleProductClicked}>
                                <h3>{product.product_name}</h3>
                                {!clickedProduct && <img src={product.product_image} alt={product.product_name} />}
                            </Link>
                            <button onClick={addToCart}>Add To Cart</button>
                        </div>
                    ))}
                </div>
            ) : <div>{searchQuery && !clickedProduct ? 'This product does not exist.' : null}</div>}
        </div>
    );
};

export default SearchComponent;
