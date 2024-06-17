import React from 'react';
import './testimonials.css';
import Star from "../images/star.jpg";

const testimonialsData = [
  {
    id: 1,
    name: "Tilly",
    rating: "5.0",
    description: "I finally got some Little Lemon Food!",
  },
  {
    id: 2,
    name: "Todd",
    rating: "5.0",
    description: "Immaculate vibes with friends.",
  },
  {
    id: 3,
    name: "Courtney",
    rating: '2.9',
    description: "Could have been better for the price.",
  },
  {
    id: 4,
    name: "Mario",
    rating: '10',
    description: "I love this place, what? I have no assosciation with Adrian!",
  } 
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <h2 className="testimonials-title">Testimonials</h2>
      </div>
      <div className="testimonial-cards">
        {testimonialsData.map((testimonial, id) => (
          <div className="testimonial-card" key={testimonial.id}>
            <div className="testimonial-details">
              <div className="rating">
                <span className="rating-label">Rating:</span>
                <img src={Star} alt="Star" className="star-icon" />
              </div>
              <div className="submitter-info">
                <span className="submitter-name">{testimonial.name}</span>
                <span className="actual-rating">{testimonial.rating}</span>
              </div>
              <p className="testimonial-description">{testimonial.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;