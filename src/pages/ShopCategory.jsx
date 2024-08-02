import React, { useCallback, useContext, useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import men_banner from '../assets/calzado.png'
import women_banner from '../assets/ropa.png'
import kid_banner from '../assets/accesorios.png'
import Item from '../components/Item/Item'

const ShopCategory = (props) => {
  const { categoryId } = useParams();
  const [page, setPage] = useState(1);
  const [canLoad, setCanLoad] = useState(true);
  const [productResult, setProductResult] = useState({
    products: [],
    total: 0,
    count: 0,
    totalPages: 1,
  });
  const { getProductsByCategory } = useContext(ShopContext);

  const updateProductResult = useCallback(() => {
    const merge = ({ products: currentProducList }, products, count, total, totalPages) => {
      console.log('currentProducList', currentProducList);
      return {
        products: currentProducList.concat(products),
        count,
        total,
        totalPages,
      }
    }
    const setData = ({ data: { query: products, count, total, size } }) => {
      const totalPages = (size && Math.floor(total / size)) || 1;
      setProductResult((p) => merge(p, products, count, total, totalPages));
      setCanLoad(page <= totalPages && count);
    };
    if (canLoad) {
      getProductsByCategory({
        categoryId,
        page: page || 1,
      })
        .then(setData)
        .catch((e) => console.log(e));
    }
  }, [getProductsByCategory, categoryId, page, canLoad]);

  const getBanner = useCallback(() => {
    if (+categoryId === 2) {
      return women_banner
    }
    if (+categoryId === 3) {
      return kid_banner
    }

    return men_banner;
  }, [categoryId]);

  useEffect(() => {
    updateProductResult();
  }, [categoryId, page]);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={getBanner()} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing {productResult.products.length} of {productResult.total} products (page: {page} of {productResult.totalPages})
          </span>
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div class="max-w-md mx-auto">
        <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
          <div class="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Escribe el producto.."
          />
        </div>
      </div>
      <div className="shopcategory-products">
        {(productResult &&
          productResult.products.length
          && productResult.products.map((item, index) => (
            <Item
              key={index}
              id={item.id}
              name={item.description}
              image={item.image}
              new_price={item.price}
              old_price={0} />))) || <span>No hay productos disponibles</span>}
      </div>
      <div
        onClick={() => setPage(page + 1)}
        className={
          canLoad
            ? ["shopcategory-loadmore"].join(" ")
            : ["shopcategory-loadmore", "disabled"].join(" ")}>
        Explorar m&aacute;s
      </div>
    </div>
  )
}

export default ShopCategory;
