import React, { Fragment, useContext, useState } from "react";
import styles from './Cart.module.scss';


import Modal from "../UI/modal/Modal";
import CartItem from "./cart-item/CartItem";
import CartContext from "../../store/CartContext";
import Checkout from "./checkout/Checkout";



const Cart = props => {

    const cartCtx = useContext(CartContext);
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const [isSubmitting, setIsSubmitig] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

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

    const submitOrderHandler = async (userData) => {
        setIsSubmitig(true)
        await fetch('http://127.0.0.1:8000/api/test/create', {

            headers: {
                "Content-Type": "application/json",
                "accept": "application/json"
            },

            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderedItems: cartCtx.items
            })

        });
        setIsSubmitig(false)
        setDidSubmit(true)
        cartCtx.clearCart();
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


    const modalContent =
        <Fragment>
            {cartItems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>

            {isCheckingOut && <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />}
            {!isCheckingOut && modalActions}
        </Fragment>;


    const isSubmittingModalContent =<p>Sending order data...</p>;
    const didSubmitModalContent = 
    <Fragment>
        <p>Successfully sent the order!</p>
        <button className={styles.button} onClick={props.onHideCart}>
            Close
        </button>
    </Fragment> 

    return (
        <Modal onHideCart={props.onHideCart}>
            {!isSubmitting && !didSubmit && modalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>
    );

};

export default Cart;