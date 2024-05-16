import React from "react";
import Book from "./Books";

const list = [
  {
    img: "https://m.media-amazon.com/images/I/713Ztse7QkL._SY466_.jpg",
    Name: "The Hill of Enchantment",
    Author: "Ruskin Bond",
  },
  {
    img: "https://m.media-amazon.com/images/I/71qUIrOKi7L._SY466_.jpg",
    Name: "80-20 Money Makeover",
    Author: "Arun Kumar",
  },
  {
    img: "https://m.media-amazon.com/images/I/71HamifdtQL._SY466_.jpg",
    Name: "Never Split the Difference ",
    Author: "Tahl Voss",
  },
  {
    img: "https://m.media-amazon.com/images/I/41+eK8zBwQL._SY445_SX342_.jpg",
    Name: "Think and grow rich",
    Author: "Napoloean Hill",
  },
  {
    img: "https://m.media-amazon.com/images/I/81BgEsl0SJL._SY466_.jpg",
    Name: "Master Your Emotions",
    Author: "Pinal Vaghasiya",
  },
];

const BookList = () => {
  return (
    <section className="bookList">
      {list.map((book) => {
        const { img, Name, Author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

export default BookList;
