import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
recipes: Recipe[] = [];
recipe: Recipe;
  constructor( private recipeService: RecipeService ) { }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => (this.recipes = recipes));
  }

  getRecipe() {
    let id = this.recipe.vId;
    this.recipeService.getRecipe(id)
    .subscribe(recipe => (this.recipe = recipe));
  }

  getRecipeByCategoryApp(category: String): Observable<Recipe[]>{
    return this.getRecipes().pipe(
    map((recipes: Recipe[]) => recipes.filter(rec => rec.category === 'Appetizer'))
    );
  }

  ngOnInit() {
    this.getRecipes()
  }

}
