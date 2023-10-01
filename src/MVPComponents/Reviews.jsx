import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review";
import ReviewForm from "./ReviewForm";

const API = process.env.REACT_APP_BACKEND_API;

function Reviews() {
    const [reviews, setReviews] = useState([]);
    let { id } = useParams();
  
    useEffect(() => {
      axios.get(`${API}/stores/${id}/reviews`).then((response) => {
        console.log(response.data);
        setReviews(response.data);
      });
    }, [id]);

    const handleAdd = (newReview) => {
        axios
          .post(`${API}/stores/${id}/reviews`, newReview)
          .then(
            (response) => {
              setReviews([response.data, ...reviews]);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };

      const handleDelete = (reviewId) => {
        axios
          .delete(`${API}/stores/${id}/reviews/${reviewId}`)
          .then(
            (response) => {
              const copyReviewArray = [...reviews];
              const indexDeletedReview = copyReviewArray.findIndex((review) => {
                return review.id === reviewId;
              });
              copyReviewArray.splice(indexDeletedReview, 1);
              setReviews(copyReviewArray);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };

      const handleEdit = (updatedReview) => {
        console.log(updatedReview);
        axios
          .put(`${API}/stores/${id}/reviews/${updatedReview.id}`, updatedReview)
          .then((response) => {
            console.log(" in the response");
            const copyReviewArray = [...reviews];
            const indexUpdatedReview = copyReviewArray.findIndex((review) => {
              return review.id === updatedReview.id;
            });
            copyReviewArray[indexUpdatedReview] = response.data;
            setReviews(copyReviewArray);
          })
          .catch((c) => console.warn("catch", c));
      };
    

    return(
    <section className="">
        <h2 className="">Reviews</h2>
        <ReviewForm handleSubmit={handleAdd}>
            <h3 className="">Add a new Review</h3>
        </ReviewForm>
        {reviews.map((review) => (
            <Review
            key={review.id}
            review={review}
            handleSubmit={handleEdit}
            handleDelete={handleDelete}
            />
        ))}

    </section>
    );
}
export default Reviews;