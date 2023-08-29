//This is the home component
import axios from "axios";
import { useState, useEffect} from "react";


const API = process.env.REACT_APP_API_URL;


const HomeComponent = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        axios.get(`${API}/products`).then((response) => {
            console.log(response)
            setProducts(response.data);
            setLoading(false)
        })
        .catch((e) => {
            console.error("Error fetching data:", e);
            setError("An error occurred while fetching data.");
            setLoading(false);
        });
    }, [])

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
    return (
        <div>
            <h1>LIST OF THE PRODUCTS</h1>
            <ul>
                {products.map((product)=> {
                   return <li key = {product.product_id}>{product.product_name}</li>
                })}
            </ul>
        </div>
    )
};

export default HomeComponent;