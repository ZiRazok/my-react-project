// src/components/App.jsx
import './App.css'

import { Product } from "./Product";
import { Mailbox } from "./Mailbox";
import { BookList } from "./BookList";
import { Alert } from './Alert';

const favouriteBooks = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Router overview" }
];

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Alert variant="info">Would you like to browse our recommended products?</Alert>
      <Alert variant="error">There was an error during your last transaction</Alert>
      <Alert variant="success">Payment received, thank you for your purchase</Alert>
      <Alert variant="warning">Please update your profile contact information</Alert>

      <h2 className="sss"> Books of the week</h2>
      <BookList books={favouriteBooks} />
      <br />

      <Mailbox
        name="Alan"
        unreadMessages={["hi", "hello", "My name`s Yaroslav", "And what u`r name?"]}
      />
      <Product
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
    </div>
  );
}
