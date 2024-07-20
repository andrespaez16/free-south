import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../context/ShopContext";
import { useForm } from "react-hook-form";

import { Bars3Icon } from "@heroicons/react/24/outline";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const test = 23;
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <img
                  className="cartitems-remove-icon"
                  src={Bars3Icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
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
          {/* <button>
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send?phone=3006406246&text=Hola como vas deseo comprar este articulo ${all_product[0].name}`}
            >
              Realizar la factura
            </a>
          </button> */}
        </div>
        <div className="cartitems-promocode">
          <p>Por favor ingresa tus datos aqui para generar la factura.</p>
          <form
            onSubmit={handleSubmit((data) => {
              console.log("form activado", data);
              reset()
            })}
          >
            <div className="cartitems-promobox">
              <input
                type="text"
                {...register("Nombre", { required: true })}
                placeholder="Nombre"
              />
            </div>
            {errors.Nombre && <span>Nombre es requerido</span>}
            <div className="cartitems-promobox">
              <input
                type="number"
                {...register("Cedula", { required: true })}
                placeholder="Cedula"
              />
            </div>
            {errors.Cedula && <span>Cedula es requerida</span>}
            <div className="cartitems-promobox">
              <input
                type="tel"
                {...register("Telefono", { required: true })}
                placeholder="Telefeno"
              />
            </div>
            {errors.Telefono && <span>Telefono es requerido</span>}
            <div className="cartitems-promobox">
              <input
                type="text"
                {...register("Ciudad", { required: true })}
                placeholder="Ciudad"
              />
            </div>
            {errors.Ciudad && <span>Ciudad es requerida</span>}
            <div className="cartitems-promobox">
              <input
                type="text"
                {...register("Direccion", { required: true })}
                placeholder="Direccion"
              />
            </div>
            {errors.Direccion && <span>Direccion es requerida</span>}
            <div className="cartitems-total">
              <button disabled={false}>Realizar la factura</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
