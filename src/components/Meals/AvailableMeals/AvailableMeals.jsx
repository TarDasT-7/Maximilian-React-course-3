import React from 'react';
import styles from './AvailableMeals.module.scss';

const DUMMY_MEALS =[

    {
        id: 'b1',
        name: 'Slim Burger',
        desciption : 'Mac Bread, Beef(150 grams), Lettuce, Tomato',
        price : 2.95
    },

    {
        id: 'b2',
        name: 'Super Burger',
        desciption : 'Mac Bread, Two Beefs(250 grams), Grilled Chicken(80 grams), Smoked Sauce, Lettuce, Tomato',
        price : 9.95
    },

    {
        id: 'b3',
        name: 'Cheese Burger',
        desciption : 'Mac Bread, Beef(250 grams), Cheese(gouda), Smoked Sauce, Lettuce, Tomato',
        price : 6.55
    },

    {
        id: 'b4',
        name: 'Mushroom Burger',
        desciption : 'Mac Bread, Beef(250 grams), Mushroom, Smoked Sauce, Mushroom Sauce, Lettuce, Tomato',
        price : 6.25
    },

    {
        id: 'b5',
        name: 'Bacon Burger BBQ',
        desciption : 'Mac Bread, Grilled Beef(300 grams), Bacon(80 grams), Smoked Sauce, Garlic Sauce, Tomato',
        price : 8.45
    },

];

const AvailableMeals = props => {

    const mealsList = DUMMY_MEALS.map( burger => (

        <li key={burger.id} >{burger.name}</li>

    ) );

    return(
        <section className={styles.meals}>
            <ul>
                {mealsList}
            </ul>
        </section>
    );

};

export default AvailableMeals;