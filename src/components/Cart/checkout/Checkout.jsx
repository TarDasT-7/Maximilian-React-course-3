import React from "react";
import styles from './Checkout.module.scss';

const Checkout = (props) => {

    const formSubmitHandler = (event) => {
        event.preventDefault();
    };


    return(
        <form onSubmit={formSubmitHandler}>

            <div className={styles.control}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" placeholder="please enter your name..." />
            </div>

            <div className={styles.control}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" placeholder="please enter address..." />
            </div>

            <div className={styles.control}>
                <label htmlFor="postal_code">Postal Code</label>
                <input type="text" id="postal_code" placeholder="please enter postal code..." />
            </div>

            <div className={styles.control}>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" placeholder="please enter your phone number..." />
            </div>

            <button type="button" onClick={props.onCancel}>Cancel</button>

            <button>Confirm</button>

        </form>
    );

};

export default Checkout;