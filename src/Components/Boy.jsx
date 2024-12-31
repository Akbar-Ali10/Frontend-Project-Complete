import React, { useState, useEffect } from "react";
import axios from "axios";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { useLocation } from "react-router-dom";

export default function Boy() {
  const location = useLocation();
  const noBgImgRoutes = ["/"];
  const [data, setdata] = useState([]);

  const testimonial = async () => {
    try {
      const response = await axios.get(
        "https://676cd4150e299dd2ddfd93e9.mockapi.io/testimonial"
      );
      setdata(response.data);
    } catch (error) {
      console.error("Error fetching testimonial:", error);
    }
  };

  useEffect(() => {
    testimonial();
  }, []);

  return (
    <section
      className="testimonials"
      id="testimonials"
      style={
        noBgImgRoutes.includes(location.pathname)
          ? {}
          : { marginTop: "180px" }
      }
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="section-heading">
              <h6>Testimonials</h6>
              <h4>What They Say</h4>
            </div>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              nav
              items={1}
              autoplay={true}
              autoplayTimeout={3000}
            >
              {data.length > 0 ? (
                data.map((testimonial) => (
                  <div className="item" key={testimonial.id}>
                    <i className="fa fa-quote-left" />
                    <p>{testimonial.quote}</p>
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.designation}</span>
                    <div className="right-image">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="item">
                  <p>No testimonials available</p>
                </div>
              )}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );



}






















