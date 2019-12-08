import { Component, OnInit } from "@angular/core";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../models/recipe";

@Component({
  selector: "app-recipe-display",
  templateUrl: "./recipe-display.component.html",
  styleUrls: ["./recipe-display.component.css"]
})
export class RecipeDisplayComponent implements OnInit {
  constructor(private recipeService: RecipeService) { }
  newRecipe: Recipe = new Recipe();
  recipes: Recipe[] = [];
  imageURL: string;


  getRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => (this.recipes = recipes));
  }

  addRecipe() {
    const recipeName = this.newRecipe.recipeName;
    const id = this.newRecipe.id;
    const category = this.newRecipe.category;
    const imageURL = this.newRecipe.recipeImage;
    id + 1;

    this.recipeService.addRecipe(this.newRecipe).subscribe(newRecipe => {
      newRecipe = new Recipe();
      newRecipe.id = id;
      newRecipe.recipeName = recipeName;
      newRecipe.category = category;
      newRecipe.recipeImage = imageURL;
      newRecipe.complete = true;
      this.getRecipes();
    });
  }

  updateRecipe() {
    // const id = this.recipe.id;
    // this.recipeService.getRecipe(this.recipe);
    // this.recipeService.updateRecipe(this.newRecipe);
  }

  ngOnInit() {
    this.getRecipes();
    // this.addRecipe();
  }
}
