import React from "react";
import styles from './CardButton.module.scss';
import CartIcon from "../../../Cart/icon/CartIcon";

const CardButton = props => {

    return(
        <button className={styles.button}>

            <span className={styles.icon}>
                <CartIcon  />
            </span>
            
            <span>
                Your Cart
            </span>

            <span className={styles.badge}>
                7
            </span>    
            
        </button>
    );
}

export default CardButton;