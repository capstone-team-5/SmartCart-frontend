import ReviewForm from "./ReviewForm";
import { useState } from "react";

function Review({ review, handelDelete, handleSubmit }) {
    const [viewEditForm, toggleEditForm] = useState(false);
    const toggleView = ()=> {
        toggleEditForm(!viewEditForm);

    };
    return (
        <div className="Review">
            <button
            type="button"
            className="">
                Edit this review
            </button>

            {viewEditForm ? (
                <ReviewForm
                reviewDetails={review}
                handleSubmit={handleSubmit}
                toggleView={toggleView}
                />
            ) : (
                <div className=""
                style={{paddingBottom: "10rem"}}
                >
                    <h4 className="">Title : {review.title}</h4>
                    <h4 className="">Rating : {review.rating}</h4>
                    <h5 className="">Reviewer : {review.reviewer}</h5>
                    <p className="">Description : {review.content}</p>
                    </div>

            )}
            <button
            type="button"
            className=""
            onClick={()=> handelDelete(review.id)}>Delete</button>
            

            
        </div>
    );
}
export default Review;