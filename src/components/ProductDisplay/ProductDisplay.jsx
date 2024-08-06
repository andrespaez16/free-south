import React, { useCallback, useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {

  const { product } = props;
  const { addToCart, getProductImageLink } = useContext(ShopContext);

  const getMainImage = useCallback(() => getProductImageLink(product.images[0]), [product]);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          {product.images.map((image, index) => (
            <img
              key={index}
              src={getProductImageLink(image)}
              alt={image}
              title={product.description}
            />))}
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={getMainImage()} alt={product.name} />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.description}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">${product.price}</div>
        </div>
        <div className="productdisplay-right-description">
          {product.code}
        </div>
        <div className="productdisplay-right-size">
          <h1>Seleccionar Talla</h1>
          <div className="productdisplay-right-sizes">
            {product.sizes.map((p, i) => <div key={i}>{p}</div>)}
          </div>
        </div>
        <button onClick={() => { addToCart(product) }}>Agregar</button>
        <p className='productdisplay-right-category'>
          <span>Categoria: {product.category}</span>
        </p>
        <p className='productdisplay-right-category'>
          <span>Material: {product.composition}</span>
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay
