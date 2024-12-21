import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from '../styles/Product.module.css';


const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        console.log("Product ID:", id);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles['product-container']}>
      <p>ProductDetails</p>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
