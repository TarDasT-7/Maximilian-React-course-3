import React from "react";
import Modal from "../UI/modal/Modal.jsx";
import CartItem from "./cart-item/CartItem.jsx";
import styles from './Cart.module.scss';


const Cart = props => {
    const cartItems = 
        <ul className={styles['cart-items']}>
            {[{id:'c1', name:'Bacon Burger BBQ', amount:7, price:8.75 * 7}].map(item => <li>{item.name}</li>)}
        </ul>
    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{8.75 * 7}</span>
            </div>

            <div className={styles.actions}>

                <button className={styles['button--alt']} onClick={props.onHideCart}>
                    Close
                </button>
                <button className={styles.button}>
                    Order
                </button>
                
            </div>

        </Modal>
    );
};

export default Cart;