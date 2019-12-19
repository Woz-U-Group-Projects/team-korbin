import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe';
import { Observable, pipe } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  getRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => (this.recipes = recipes));
  }

  getRecipeDetails(vId: string) {
    this.recipeService.getRecipe(vId)
    .subscribe((recipe: any) => {
      this.recipe = recipe;
      console.log(this.recipe);
    });
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

  // getRecipeByCategoryApp(category: String): Observable<Recipe[]>{
  //   return this.getRecipes().pipe(
  //   map((recipes: Recipe[]) => recipes.filter(rec => rec.category === 'Appetizer'))
  //   );
  // }

  ngOnInit() {
    // this.getRecipes();
    this.getRecipeDetails(this.route.snapshot.params.vId);
  }

}
