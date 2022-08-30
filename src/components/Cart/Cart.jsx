import React, { useContext, useState } from "react";
import styles from './Cart.module.scss';


import Modal from "../UI/modal/Modal";
import CartItem from "./cart-item/CartItem";
import CartContext from "../../store/CartContext";
import Checkout from "./checkout/Checkout";



const Cart = props => {

    const cartCtx = useContext(CartContext);
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItem = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckingOut(true);
    };

    const cartItems =

        <ul className={styles['cart-items']}>
            {cartCtx.items.map(item =>
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            )}
        </ul>

    
    const modalActions =
        <div className={styles.actions}>

            <button className={styles['button--alt']} onClick={props.onHideCart}>
                Close
            </button>
            {hasItem &&
                <button className={styles.button} onClick={orderHandler}>
                    Order
                </button>}
        </div>            

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckingOut && <Checkout onCancel={props.onHideCart} />}
            {!isCheckingOut && modalActions}

        </Modal>
    );

};

export default Cart;