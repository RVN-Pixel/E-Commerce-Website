import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          A description paragraph is required when you are asked to describe
          features or characteristics of something. This may include how
          something looks, sounds, smells, tastes, or feels. You should provide
          specific details of the most important features and use appropriate
          adjectives to describe attributes and qualities.
        </p>
        <p>
          A descriptive paragraph provides a vibrant experience for the reader
          through vivid language and descriptions of something. Unlike narrative
          paragraphs, which must include personal thoughts, feelings, and
          growth, descriptive paragraphs do not need to be personal in nature.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
