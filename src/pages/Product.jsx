import React, { useCallback, useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';

const Product = () => {
  const { getProductDetails } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  const getProduct = useCallback(() => {
    if (!productId) return;

    getProductDetails(productId)
      .then(setProduct)
      .catch(e => console.log(e));
  }, [productId]);

  useEffect(() => {
    getProduct();
  }, [productId])
  return (
    <div>
      {(product && <ProductDisplay product={product} />) || <span>Loading...</span>}
    </div>
  )
}

export default Product
