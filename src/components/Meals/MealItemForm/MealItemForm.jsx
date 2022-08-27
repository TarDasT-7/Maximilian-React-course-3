import React, { useRef, useState } from "react";
import styles from './MealItemForm.module.scss';

import Input from "../../UI/input/Input";

const MealItemForm = (props) => {

    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const formHandler = (event) => {
        event.preventDefault();

        const enterdAmount = amountInputRef.current.value;
        const enterdAmountNumber = +enterdAmount;

        if (enterdAmount.trim().length === 0 || enterdAmountNumber < 1 || enterdAmountNumber > 10) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enterdAmountNumber);


    }

    return (
        <form className={styles.form} onSubmit={formHandler}>
            <Input ref={amountInputRef} label="Amount" input=
                {
                    {
                        id: 'amount',
                        type: 'number',
                        min: '1',
                        max: '10',
                        step: '1',
                        defaultValue: '1'
                    }
                }

            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enterd a valid amount (1-10) </p>}
        </form>
    );
};

export default MealItemForm;