import React, { useContext, useEffect, useState } from "react";

import styles from './CardButton.module.scss';
import CartIcon from "../../../Cart/icon/CartIcon";
import CartContext from "../../../../store/CartContext";

const CardButton = props => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${styles.button} ${btnIsHighlighted?styles.bump:''}`;

    useEffect(()=>{
        if(items.length === 0)
        {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return ()=>{
            clearTimeout(timer)
        };

    },[items]);
    
    return(
        <button className={btnClasses} onClick={props.onShowCart}>

            <span className={styles.icon}>
                <CartIcon  />
            </span>
            
            <span>
                Your Cart
            </span>

            <span className={styles.badge}>
                {numberOfCartItems}
            </span>    
            
        </button>
    );
}

export default CardButton;