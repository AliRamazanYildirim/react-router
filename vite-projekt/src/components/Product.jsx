import { useNavigate } from 'react-router-dom';
import styles from '../styles/Product.module.css';

const Product = ({ product }) => {
  const { id, title, price, image } = product;
  const navigate = useNavigate();
  return (
    <div className={styles['product-container']}>
      <p>Product ID: {id}</p>
      <p>Product Name: {title}</p>
      <p>Product Price: ${price}</p>
      <img src={image} loading="lazy" alt={title} />
      <button onClick={() => navigate("/product-details/" + id)}>Go to Details</button>
    </div>
  );
};

export default Product