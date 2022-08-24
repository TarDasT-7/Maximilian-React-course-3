import React from 'react';
import styles from './MealsSummery.module.scss';

const MealsSummery = props => (

    <section className={styles.summary}>
        
        <h2> Delicious Burger , Delivered To You </h2>

        <p>
            Today we take fast food for granted.
            It's part of everyday life.
            We simply expect to find identical stores in every plaza, mall, and highway exit in the country.
        </p>

        <p>
            So in 1948 the McDonald brothers made a risky gamble.
            They closed their successful restaurant and totally redesigned it.
            No more drive-in, no more waitresses and no more messy dishes.
            The menu was simplified to only a few low-cost items, all sold in disposable cups and bags.
        </p>

    </section>

);

export default MealsSummery;