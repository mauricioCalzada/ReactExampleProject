import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import Axios from "axios";
import { useEffect, useState } from 'react';



const AvailableMeals = () => {
  const [meals, setMealList] = useState("");

  useEffect(() => {
    Axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?a=Mexican").then((res) => {
      setMealList(res.data.meals);
    });
  }, []);

  const mealsList = Array.isArray(meals) ? meals.map((meal) => <MealItem key={meal.idMeal} id={meal.idMeal} name={meal.strMeal} image={meal.strMealThumb} />) : [];
  return <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
  </section>
};

export default AvailableMeals;