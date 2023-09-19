import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineSmile, AiOutlineMeh, AiOutlineFrown } from "react-icons/ai";

const FeedbackComponent = () => {
  const [feedbackLevel, setFeedbackLevel] = useState(0);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const feedbackIcons = [
    <AiOutlineFrown size={64} />,
    <AiOutlineMeh size={64} />,
    <AiOutlineSmile size={64} />,
  ];

  const changeHandler = (event) => {
    setFeedbackLevel(parseInt(event.target.value));
    setFeedbackSubmitted(false);
  };

  const submitFeedback = () => {
    setFeedbackSubmitted(true);
  };

  return (
    <>
      <div>
        <div className="py-12 px-4">
          <div className="mx-auto container lg:max-w-[356px] md:max-w-[720px] max-w-[343px] py-8 px-8 bg-white shadow rounded-md">
            <p className="text-base font-semibold leading-normal text-center text-gray-800">
              Share your experience with us?
            </p>
            <div
              className={`border mx-auto rounded-full w-[64px] h-[64px] border-${
                feedbackLevel === 0
                  ? "red-500"
                  : feedbackLevel === 1
                  ? "blue-500"
                  : "green-400"
              } relative mt-6 mb-6`}
            >
              {feedbackIcons[feedbackLevel]}
            </div>
            <p className="text-sm leading-none text-center text-gray-600">
              {feedbackLevel === 0
                ? "Bad"
                : feedbackLevel === 1
                ? "Good"
                : "Excellent"}{" "}
              Experience
            </p>
            <div className="slider mt-4 mb-4 mx-auto">
              <input
                id="slider"
                onChange={changeHandler}
                className={`w-full cursor-pointer accent-${
                  feedbackLevel === 0
                    ? "red-500"
                    : feedbackLevel === 1
                    ? "blue-500"
                    : "green-500"
                } rounded-full`}
                type="range"
                defaultValue={0}
                min={0}
                max={2}
                step={0}
              />
            </div>
            <button
              onClick={submitFeedback}
              className="text-sm font-medium leading-none text-white px-6 py-4 bg-indigo-700 rounded w-full hover:bg-indigo-600 transform duration-300 ease-in-out"
            >
              Submit Review
            </button>
          </div>
          {feedbackSubmitted && (
            <div className="mx-auto container lg:max-w-[356px] md:max-w-[720px] max-w-[343px] py-8 px-8 bg-white shadow rounded-md mt-12">
              <div className="mt-6">
                <p className="text-base font-semibold leading-normal text-center text-gray-800">
                  Thank you for your Feedback!
                </p>
                <Link to="/home">
                  <button className="text-sm font-medium leading-none text-white px-6 py-4 bg-[#10b981] rounded w-full hover:bg-green-400 transform duration-300 ease-in-out">
                    Back to Homepage
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FeedbackComponent;
