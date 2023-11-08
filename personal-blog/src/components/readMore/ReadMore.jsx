import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div>
      <p>{isReadMore ? text : text.slice(0, maxLength)}</p>
      {text.length > maxLength && (
        <button onClick={toggleReadMore}>
          {isReadMore ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
