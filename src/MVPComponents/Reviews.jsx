import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_BACKEND_API;

function Review() {
    const [reviews, setReviews] = useState([]);
    let { id } = useParams();
  
    useEffect(() => {
      axios.get(`${API}/groceries/${id}/reviews`).then((response) => {
        console.log(response.data);
        setReviews(response.data);
      });
    }, [id]);

    return(<section>

    </section>);
}