import React, { Component } from 'react';
import './App.css';

import Form from './components/Form';
import ResipeResults from './components/RecipeResults';

const API_KEY = "3b11113c12e94d14ba0bd03caf7f12b7";

class App extends Component{
  state = {
    recipes:[]
  }
  
  getRecipe = async (e) =>{
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch
    (`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${recipeName}&number=24&apiKey=${API_KEY}`);
    const data = await api_call.json();
    this.setState({ recipes:data });
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({recipes : recipes});
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Finder</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <ResipeResults recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;
