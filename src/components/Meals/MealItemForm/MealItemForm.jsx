import React from "react";
import styles from './MealItemForm.module.scss';

import Input from "../../UI/input/Input";

const MealItemForm = (props)=>{

    const formHandler = (event) =>{
        event.preventDefault();
    }

    return (
        <form className={styles.form} onSubmit={formHandler}>
            <Input label="Amount" input=
            {
                {
                    id:'amount',
                    type:'number',
                    min:'1',
                    max:'10',
                    step:'1',
                    defaultValue : '0'
                }
            } 
            
            />
            <button>+ Add</button>
        </form>
    );
};

export default MealItemForm;