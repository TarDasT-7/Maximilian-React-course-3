import React, { useRef, useState } from "react";
import styles from './Checkout.module.scss';


const isEmpty = value => value.trim() === '';
const isFiveChars = value => value.trim().length === 5;

const Checkout = (props) => {

    const [formInputsValidity, setFormInputsValidity] = useState({

        name : true,
        address : true,
        postalCode : true,
        phone : true

    });


    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const postalCodeInputRef = useRef();
    const phoneInputRef = useRef();



    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enterdName = nameInputRef.current.value;
        const enterdAddress = addressInputRef.current.value;
        const enterdPostalCode = postalCodeInputRef.current.value;
        const enterdPhone = phoneInputRef.current.value;

        const enterdNameIsValid = !isEmpty(enterdName);
        const enterdAddressIsValid = !isEmpty(enterdAddress);
        const enterdPostalCodeIsValid = isFiveChars(enterdPostalCode);
        const enterdPhoneIsValid = !isEmpty(enterdPhone);

        const formIsValid = enterdNameIsValid && enterdAddressIsValid && enterdPostalCodeIsValid && enterdPhoneIsValid;

        setFormInputsValidity({
            name : enterdNameIsValid,
            address : enterdAddressIsValid,
            postalCode : enterdPostalCodeIsValid,
            phone : enterdPhoneIsValid
        })

        if(!formIsValid) {
            return;
        }

        props.onConfirm({
            name : enterdName.trim(),
            address : enterdAddress.trim(),
            postalCode : enterdPostalCode.trim(),
            phone : enterdPhone.trim()
    
        })


    };

    const nameControlStyles = `${styles.control} ${!formInputsValidity.name ? styles.invalid : ''}`;
    const addressControlStyles = `${styles.control} ${!formInputsValidity.address ? styles.invalid : ''}`;
    const posalCoedControlStyles = `${styles.control} ${!formInputsValidity.postalCode ? styles.invalid : ''}`;
    const phoneControlStyles = `${styles.control} ${!formInputsValidity.phone ? styles.invalid : ''}`;


    return(
        <form className={styles.form} onSubmit={formSubmitHandler}>

            <div className={nameControlStyles}>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" ref={nameInputRef} placeholder="please enter your name..." />
                {!formInputsValidity.name && <p className={styles.error}>Please Enter Valid Name</p>}
            </div>

            <div className={addressControlStyles}>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef} placeholder="please enter address..." />
                {!formInputsValidity.address && <p className={styles.error}>Please Enter Valid Address</p>}
            </div>

            <div className={posalCoedControlStyles}>
                <label htmlFor="postal_code">Postal Code</label>
                <input type="text" id="postal_code" ref={postalCodeInputRef} placeholder="please enter postal code..." />
                {!formInputsValidity.postalCode && <p className={styles.error}>Please Enter Valid Postal Code</p>}
            </div>

            <div className={phoneControlStyles}>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" ref={phoneInputRef} placeholder="please enter your phone number..." />
                {!formInputsValidity.phone && <p className={styles.error}>Please Enter Valid Phone</p>}
            </div>

            <button type="button" onClick={props.onCancel}>Cancel</button>

            <button>Confirm</button>

        </form>
    );

};

export default Checkout;