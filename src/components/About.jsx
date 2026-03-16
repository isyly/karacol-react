import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../App.css";

import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import about4 from "../assets/about4.jpg";

const images = [about1, about2, about3, about4];

const About = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);


  const nextSlide = () => setCurrent((current + 1) % images.length);
  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="aboutus-section" id="about">

      <div className="aboutus-flex container">
        <div className="aboutus-carousel">
          <button className="carousel-btn left" onClick={prevSlide}>&lt;</button>
          <img src={images[current]} alt={`about-slide-${current+1}`} className="carousel-img" />
          <button className="carousel-btn right" onClick={nextSlide}>&gt;</button>
        </div>
        <div className="aboutus-container">
          <h2>{t("about.title")}</h2>
          <p>{t("about.description")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
