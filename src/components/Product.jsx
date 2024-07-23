// src/components/Product.jsx

import PropTypes from 'prop-types';

export const Product = ({
  name="{Product name placeholder}",
  imgUrl="https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
  price="{Product price placeholder}"
}) => {
  return (
    <div>
      <h2>{name}</h2>
			<img src={imgUrl} alt={name} width="480" />
			<p>Price: {price} credits</p>
    </div>
  );
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  price: PropTypes.number.isRequired,
};






export default Product;