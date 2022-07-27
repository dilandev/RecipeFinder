import React, { useEffect, useState } from 'react';
import '../App.css';

import { Link, useLocation } from "react-router-dom";

const API_KEY = "3b11113c12e94d14ba0bd03caf7f12b7";

function Recipe(){
  const location = useLocation();
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    async function fetchData(){
      const recipeId = location.state;
      const req = await fetch
      (`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${API_KEY}`);
      const res = await req.json();
      setRecipe(res);
    }
    fetchData();
  },[location]);

  return(
    <div className="container">
      { recipe.length !== 0 && 
        <div className="active-recipe" style={{marginTop:"2rem"}}>
          <img className="active-recipe__img" src={recipe.image} alt={recipe.title}/>
          <h3 className="active-recipe__title">{recipe.title}</h3>
          <p>Estimated Time to Cook: <span>{recipe.readyInMinutes} Minutes</span></p>
          <p className="active-recipe__website">Website:<span><a href={recipe.sourceUrl} target="_blank">{recipe.sourceUrl}</a></span></p>
          <button className='active-recipe__button'>
            <Link to="/">Go Back</Link>
          </button>
      </div>  
      }
    </div>
  );
}
  
export default Recipe;