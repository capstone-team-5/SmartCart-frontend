import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

//This component will display individual products

const IndividualProductComponent = () => {

    const [showOneItem, setShowOneItem] = useState({});

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACKEND_API}/products/${id}`)
            .then((response) => setShowOneItem(response.data))
            .catch((error) => console.log(error))
    }, [id]);


    return (
        <div>
            {showOneItem &&
                <>
                <img src={showOneItem.product_image} alt={showOneItem.product_name} width='350px' />
                <strong><h1>{showOneItem.product_name}</h1></strong>
                <strong><p>${showOneItem.product_price}</p></strong>
                <p>{showOneItem.product_description}</p>
                <p>{showOneItem.product_weight} {showOneItem.product_unit}</p>
                <br/> 
                {showOneItem.product_is_stock ? (
                    <p>Is in stock</p>
                ) : (
                        <p>Out of stock</p>
                )
                }
            
            </>
            
            
            }

        </div>
    )
};

export default IndividualProductComponent;