import React, { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { useForm, useFormState } from "react-hook-form";

import "./CartItems.css";

const CartItems = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    getTotalCartAmount,
    getTotalCartItems,
    getProductImageLink,
    getShoppingCart,
    removeFromCart,
    resetPurchase,
    createOrder,
  } = useContext(ShopContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const {
    isValid,
  } = useFormState({ control });

  const cartItems = useMemo(() => getShoppingCart(), [getShoppingCart])

  const onSubmit = data => {
    const cart = getShoppingCart();
    const products = cart.map((item) => ({
      product_id: item.id,
      count: item.quantity
    }));
    setLoading(true);

    createOrder({
      products,
      user: data,
    }).then(() => {
      reset();
      resetPurchase();
      navigate('/');
      alert('Pedido recibido, nos contactaremos para confirmar el envio.');
    }).catch((error) => {
      alert('No se ha podido procesar  su pedido, por favor intente nuevamente.');
    }).finally(() => setLoading(false));
  };

  const setValueAs = value => value && typeof value === 'string'
    ? value.trim()
    : value;

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {cartItems.map((item, key) => (
        <div key={key}>
          <div className="cartitems-format cartitems-format-main">
            <img src={getProductImageLink(item.image)} alt={item.code} className="carticon-product-icon" />
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button className="cartitems-quantity">
              {item.quantity}
            </button>
            <button className="cartitems-paid">
              {item.paid}
            </button>
            <button
              className="cartitems-remove-icon"
              role="button"
              onClick={() => removeFromCart(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
          </div>
          <hr />
        </div>
      ))}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Total del carro</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Impuesto de compra</p>
              <p>Gratis</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
        </div>
        <div className="cartitems-promocode">
          <p>Por favor ingresa tus datos aqui para generar la factura.</p>
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="Nombre"
                {...register("name", { required: true, min: 3, setValueAs, })}
              />
            </div>
            {errors.name && <span>Nombre es requerido</span>}
            <div className="cartitems-promobox">
              <input
                type="number"
                placeholder="Cedula"
                {...register("cc", { required: true, min: 3, setValueAs, })}
              />
            </div>
            {errors.cc && <span>Cedula es requerida</span>}
            <div className="cartitems-promobox">
              <input
                type="tel"
                placeholder="Telefeno"
                {...register("contact", { required: true, min: 3, setValueAs, })}
              />
            </div>
            {errors.contact && <span>Telefono es requerido</span>}
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="Ciudad"
                {...register("city", { required: true, min: 3, setValueAs, })}
              />
            </div>
            {errors.city && <span>Ciudad es requerida</span>}
            <div className="cartitems-promobox">
              <input
                type="text"
                placeholder="Direccion"
                {...register("address", { required: true, min: 3, setValueAs, })}
              />
            </div>
            {errors.address && <span>Direccion es requerida</span>}
            <div className="cartitems-promobox">
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true, min: 3, setValueAs, })}
              />
            </div>
            {errors.email && <span>Direccion es requerida</span>}
            <div className="cartitems-total">
              <button type="submit" disabled={!(getTotalCartItems() > 0) || !isValid || loading}>Realizar la factura</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
