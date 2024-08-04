import React, { useContext } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'

const Item = (props) => {
  const { getProductImageLink } = useContext(ShopContext);

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}>
        <img
          src={getProductImageLink(props.image)}
          alt={props.name} />
        <p>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
            ${props.new_price}
          </div>
          <div className="item-price-old">
            ${props.old_price}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Item
