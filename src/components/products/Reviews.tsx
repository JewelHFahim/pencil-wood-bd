import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";

const reviews = [
  {
    name: "John Doe",
    date: "Feb 10, 2024",
    rating: 5,
    comment: "Great product! Highly recommended.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Jane Smith",
    date: "Jan 20, 2024",
    rating: 4,
    comment: "Good quality, but took time to deliver.",
    image: "https://via.placeholder.com/50",
  },
  {
    name: "Alex Johnson",
    date: "Dec 15, 2023",
    rating: 3,
    comment: "Average experience, expected better.",
    image: "https://via.placeholder.com/50",
  },
];

const ratings = [5, 4, 3, 2, 1];

export default function Reviews() {
  const [form, setForm] = useState({ name: "", rating: 0, comment: "" });

  const totalReviews = reviews.length;
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRatingChange = (rating: number) => {
    setForm({ ...form, rating });
  };

  return (
    <div className="mt-5 p-2 md:p-6 bg-white shadow-md rounded-lg">
      {/* Rating Summary Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left: Rating Distribution */}
        <div>
          {ratings.map((rate) => {
            const count = reviews.filter((r) => r.rating === rate).length;
            return (
              <div key={rate} className="flex items-center gap-4">
                <div className="w-24 text-primary">{Array(rate).fill("⭐").join("")}</div>

                <div className="flex-1 h-2 bg-gray-200 rounded">
                  <div
                    className="h-2 bg-yellow-500 rounded"
                    style={{ width: `${(count / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="text-gray-600">{count}</span>
              </div>
            );
          })}
        </div>

        {/* Right: Average Rating & Total Reviews */}
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600">Avarage Rating</p>

          <span className="text-5xl font-semibold text-gray-700">
            {averageRating.toFixed(1)}
          </span>
          <div className="flex text-xl my-1 text-yellow-500">
            {Array(Math.round(averageRating)).fill(null).map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <span className="text-gray-600">{totalReviews} Reviews</span>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mb-6">
        {reviews.map((review, index) => (
          <div key={index} className="border-b border-gray-200 pb-4 mb-4 flex gap-4">
            <img
              src="/product_5.webp"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-500">{review.date}</p>
              <div className="flex text-yellow-500">
                {Array(review.rating)
                  .fill(null)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Review Form */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-2"
          value={form.name}
          onChange={handleInputChange}
        />
        <div className="flex gap-1 mb-2">
          {ratings.map((rate) => (
            <button key={rate} onClick={() => handleRatingChange(rate)}>
              {form.rating >= rate ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar />
              )}
            </button>
          ))}
        </div>
        <textarea
          name="comment"
          rows={3}
          placeholder="Your Review"
          className="w-full p-2 border rounded mb-2"
          value={form.comment}
          onChange={handleInputChange}
        />
        <button className="w-full bg-primary text-white py-2 rounded hover:bg-violet-600">
          Submit Review
        </button>
      </div>
    </div>
  );
}
