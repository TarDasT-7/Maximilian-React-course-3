import React, { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.scss';

import Card from '../../UI/card/Card';
import MealItem from '../MealItems/MealItem';
import MealItemForm from '../MealItemForm/MealItemForm';

// const DUMMY_MEALS =[

//     {
//         id: 'b1',
//         name: 'Slim Burger',
//         description : 'Mac Bread, Beef(150 grams), Lettuce, Tomato',
//         price : 2.95
//     },

//     {
//         id: 'b2',
//         name: 'Grilled Burger',
//         description : 'Mac Bread, Beef(250 grams), Smoked Sauce, Lettuce, Tomato',
//         price : 5.15
//     },

//     {
//         id: 'b3',
//         name: 'Super Burger',
//         description : 'Mac Bread, Two Beefs(250 grams x2), Grilled Chicken(80 grams), Smoked Sauce, Lettuce, Tomato',
//         price : 9.95
//     },

//     {
//         id: 'b4',
//         name: 'Cheese Burger',
//         description : 'Mac Bread, Beef(250 grams), Cheese(gouda), Smoked Sauce, Lettuce, Tomato',
//         price : 6.55
//     },

//     {
//         id: 'b5',
//         name: 'Mushroom Burger',
//         description : 'Mac Bread, Beef(250 grams), Mushroom, Smoked Sauce, Mushroom Sauce, Lettuce, Tomato',
//         price : 6.25
//     },

//     {
//         id: 'b6',
//         name: 'Bacon Burger BBQ',
//         description : 'Mac Bread, Grilled Beefs(150 grams x2), Bacon(80 grams), Smoked Sauce, Garlic Sauce, Tomato',
//         price : 8.75
//     },

//     {
//         id: 'b7',
//         name: 'Mix Burger',
//         description : 'Mac Bread, Beefs(250 grams), Chicken(120 grams), Mushroom, Smoked Sauce, Garlic Sauce, Tomato',
//         price : 7.00
//     },

// ];

const AvailableMeals = props => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [htppError, setHttpError] = useState()

    useEffect(() => {

        const featchMeals = async () => {
            const response = await fetch('http://127.0.0.1:8000/api/meals').then();

            if(!response.ok)
            {
                throw new Error('something went wrong!');
            }

            const responseData = await response.json();
            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        };

        featchMeals().catch(error => {
            setIsLoading(false);
            setHttpError(error.message)
        });
        
    }, []);


    if (isLoading) {
        return (
            <section className={styles.MealsLoading}>
                <p>
                    Loading...
                </p>
            </section>
        );
    }

    if (htppError) {
        return (
            <section className={styles.MealsError}>
                <p>
                    {htppError}
                </p>
            </section>
        );
    }

    const mealsList = meals.map(burger => (

        <MealItem key={burger.id} id={burger.id} name={burger.name} description={burger.description} price={burger.price} />

    ));

    return (
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