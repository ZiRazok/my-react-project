// src/components/App.jsx

import { Product } from "./Product";
import { Mailbox } from "./Mailbox";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

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
