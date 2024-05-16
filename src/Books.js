import React from "react";

const Book = ({ img, Name, Author }) => {
  const handleClick = () => {
    console.log(Author);
  };
  return (
    <article className="book">
      <img src={img} alt="Not valid"></img>
      <h1>{Name}</h1>
      <h4>{Author}</h4>
      <button type="button" onClick={handleClick}>
        Click me
      </button>
    </article>
  );
};
export default Book;
