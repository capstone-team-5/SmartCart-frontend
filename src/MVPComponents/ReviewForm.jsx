import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ReviewForm(props) {
  let { id } = useParams();
  const navigate = useNavigate();
  const { reviewDetails } = props;

  const [review, setReview] = useState({
    reviewer: "",
    rating: "",
    comment: "",
    timestamp:"",
    store_id: id,
  });

  const handleTextChange = (event) => {
    setReview({ ...review, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setReview(reviewDetails);
    }
  }, [id, reviewDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(review, id);
    if (reviewDetails) {
      console.log("review id:", reviewDetails.id);
      props.toggleView();
    }
    setReview({
        reviewer: "",
        rating: "",
        comment: "",
        timestamp:"",
        store_id: id,
    });
  };
  return (
    <div className="p-4" style={{ paddingBottom: "6rem" }}>
      {props.children}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-full">
          <label htmlFor="reviewer" className="mb-1 font-medium text-gray-700">
            Name:
          </label>
          <input
            id="reviewer"
            value={review.reviewer}
            type="text"
            onChange={handleTextChange}
            placeholder="Your name"
            required
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        

        <div className="flex flex-col w-full">
          <label htmlFor="rating" className="mb-1 font-medium text-gray-700">
            Rating:
          </label>
          <input
            id="rating"
            type="number"
            name="rating"
            min="0"
            max="5"
            step="1"
            value={review.rating}
            onChange={handleTextChange}
            placeholder="Your Rating"
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>

        <div className="flex flex-col w-full">
          <label htmlFor="content" className="mb-1 font-medium text-gray-700">
            Review:
          </label>
          <textarea
            id="comment"
            type="text"
            name="comment"
            value={review.comment}
            placeholder="What do you think..."
            onChange={handleTextChange}
            className="border border-gray-300 rounded-md px-3 py-2 relative bg-white shadow outline-none focus:outline-none focus:ring lg:w-3/4"
          />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="bg-green-300 hover:bg-green-100 mt-4 text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline rounded-lg shadow-green-500/50 border shadow-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
