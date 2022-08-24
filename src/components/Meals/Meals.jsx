import React, { Fragment } from "react";
import MealsSummery from "./summery/MealsSummery";
import AvailableMeals from "./AvailableMeals/AvailableMeals";


const Meals = props => {

    return(
        <Fragment>
            
            <MealsSummery />
            <AvailableMeals />
            
        </Fragment>
    );

};

export default Meals;