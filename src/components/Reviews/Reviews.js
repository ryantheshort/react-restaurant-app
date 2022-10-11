import { useState } from "react";
import ReviewsForm from "./ReviewsForm";
import ReviewsDetail from "./ReviewsDetail";

const INITIAL_REVIEWS = [ 
  {
    id: 1,
    name: "Guy Famous",
    body: "Most underrated shop in Greenville!",
  },
  {
    id: 2,
    name: "Chris P Bacon",
    body: "Came for the pizza, stayed for the dessert.",
  },
  {
    id: 3,
    name: "Marv S",
    body: "The pizza was worth the cheesy beard.",
  },
  {
    id: 4,
    name: "Dan P",
    body: "The cheesecake is to die for!",
  },
];

function Reviews() {
  const [reviewList, setReviewList] = useState(INITIAL_REVIEWS);

  const addReview = (newReview) => {
    setReviewList([newReview, ...reviewList]);
  };

  const removeReview = (id) => {
    const index = reviewList.findIndex((review) => review.id === id);
    const updatedReviewList = [...reviewList];
    updatedReviewList.splice(index, 1);
    setReviewList(updatedReviewList);
  };

  const updateReview = (updatedReview) => {
    const index = reviewList.findIndex((review) => review.id === updatedReview.id);
    const updatedReviewList = [...reviewList];
    updatedReviewList[index] = updatedReview;
    setReviewList(updatedReviewList);
  };

  const reviewsHTML = reviewList.map((review) => (
    <ReviewsDetail
      key={review.id}
      review={review}
      removeReview={removeReview}
      updateReview={updateReview}
    />
  ));

  return (
    <div className="row">
      <ReviewsForm addReview={addReview} />
      <ul className="col-md-6">{reviewsHTML}</ul>
    </div>
  );
}

export default Reviews;