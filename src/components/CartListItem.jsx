import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartItem from './CartItem';

import './styles/CartListItem.css';

const CartListItem = () => {
  const cartContext = useContext(CartContext);
  const { cart, deleteCartById, deleteCart } = cartContext;

  return (
    <section className="list-cart-container">
      {cart ? (
        cart.map((product) => {
          return (
            <CartItem
              key={product.id}
              item={product}
              deleteCartById={deleteCartById}
            />
          );
        })
      ) : (
        <p>Loading products</p>
      )}
      {cart.length ? (
        <button className="button-primary button-padding" onClick={deleteCart}>
          Empty cart
        </button>
      ) : (
        <p>There are no products in the cart</p>
      )}
    </section>
  );
};

export default CartListItem;
