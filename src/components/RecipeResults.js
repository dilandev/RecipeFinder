import React from "react";
import { Link } from "react-router-dom";

const RecipeResults = props => (
    <div className="container">
        <div className="row">
        { props.recipes.map((recipe) => {
          return(
            <div key={recipe.id} className="col-md-4" style={{ marginBottom:"2rem" }}>
                <div className="recipes__box">
                    <img className="recipe__box-img" src={recipe.image} alt={recipe.title}/>
                    <div className="recipe__text">
                        <h5 className="recipes__title">
                            {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0,25)}...`}
                        </h5>
                    </div>
                    <button className="recipe_buttons">
                        <Link to={{pathname:`/recipe/${recipe.id}`}} state={recipe.id}>View Recipe</Link>
                    </button>
                </div>
            </div>
          );
        }) }
        </div>
    </div>
);

export default RecipeResults;