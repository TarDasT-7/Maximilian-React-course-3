import React from 'react';
import styles from './AvailableMeals.module.scss';

import Card from '../../UI/card/Card';
import MealItem from '../MealItems/MealItem';
import MealItemForm from '../MealItemForm/MealItemForm';

const DUMMY_MEALS =[

    {
        id: 'b1',
        name: 'Slim Burger',
        description : 'Mac Bread, Beef(150 grams), Lettuce, Tomato',
        price : 2.95
    },

    {
        id: 'b2',
        name: 'Super Burger',
        description : 'Mac Bread, Two Beefs(250 grams x2), Grilled Chicken(80 grams), Smoked Sauce, Lettuce, Tomato',
        price : 9.95
    },

    {
        id: 'b3',
        name: 'Cheese Burger',
        description : 'Mac Bread, Beef(250 grams), Cheese(gouda), Smoked Sauce, Lettuce, Tomato',
        price : 6.55
    },

    {
        id: 'b4',
        name: 'Mushroom Burger',
        description : 'Mac Bread, Beef(250 grams), Mushroom, Smoked Sauce, Mushroom Sauce, Lettuce, Tomato',
        price : 6.25
    },

    {
        id: 'b5',
        name: 'Bacon Burger BBQ',
        description : 'Mac Bread, Grilled Beefs(150 grams x2), Bacon(80 grams), Smoked Sauce, Garlic Sauce, Tomato',
        price : 8.75
    },

];

const AvailableMeals = props => {

    const mealsList = DUMMY_MEALS.map( burger => (

        <MealItem key={burger.id} id={burger.id} name={burger.name} description={burger.description} price={burger.price} />

    ) );

    return(
        <section className={styles.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
            
        </section>
    );

};

export default AvailableMeals;