import React, { useState } from "react";
import "./readMore.scss";

const ReadMore = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
      <p>
        {isReadMore ? text : text.slice(0, maxLength)}{" "}
        {!isReadMore && text.length > maxLength && (
          <span className="readmore">...</span>
        )}
        {text.length > maxLength && (
          <button onClick={toggleReadMore}>
            {isReadMore ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
    </div>
  );
};

export default ReadMore;
