import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe: Recipe;
    constructor( private recipeService: RecipeService ) { }
  
    getRecipes() {
      this.recipeService.getRecipes().subscribe(recipes => (this.recipes = recipes));
    }
  
    getRecipe() {
      const id = this.recipe.vId;
      const name = this.recipe.recipeName;
      const category = this.recipe.category;
      const active = this.recipe.active;
      const ingredient = this.recipe.ingredient[0];
      const qty = this.recipe.qty[0];
      const measurement = this.recipe.measurement[0];
      const directions = this.recipe.directions;
      
      let viewRecipe = this.recipeService.getRecipe(id);
      viewRecipe.subscribe(recipe => (this.recipe = recipe));
      this.recipe.vId = id;
      this.recipe.recipeName = name;
      this.recipe.category = category;
      this.recipe.active = active;
      this.recipe.ingredient = ingredient[0];
      this.recipe.qty = qty[0];
      this.recipe.measurement = measurement[0];
      this.recipe.directions = directions;
      
    }
  
    ngOnInit() {
      this.getRecipes()
    }
  
  }