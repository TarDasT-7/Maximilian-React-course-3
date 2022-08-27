import React, { Fragment } from "react";
import styles from './Header.module.scss';

import mealsImage from '../../../assets/foods/7.jpg'
import CardButton from "./button/CardButton";

const Header = props => {

    return(
        <Fragment>

            <header className={styles.header}>

                <h1>Good Mood :)</h1>
                
                <CardButton onShowCart={props.onShowCart}  />

            </header>
            
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="good mood with good burger!" />
            </div>

        </Fragment>
    );

}



export default Header;