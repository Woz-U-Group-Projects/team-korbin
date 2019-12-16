import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-new-recipe-modal',
  templateUrl: './new-recipe-modal.component.html',
  styleUrls: ['./new-recipe-modal.component.css']
})

export class NewRecipeModalComponent implements OnInit {
  @Input() my_modal_title;
  @Input() my_modal_content;
  
  constructor(public activeModal: NgbActiveModal, private recipeService: RecipeService) { }
  newRecipe: Recipe = new Recipe();
  recipes: Recipe[];

  getRecipe() {
    let id = this.newRecipe.vId

    this.recipeService.getRecipe(id)
    .subscribe(recipe => {this.newRecipe = recipe});
  }

  addRecipe() {
    const recipeName = this.newRecipe.recipeName;
    const id = this.newRecipe.vId;
    const category = this.newRecipe.category;
    const ingredient = this.newRecipe.ingredient[0];
    const qty = this.newRecipe.qty[0];
    const measurement = this.newRecipe.measurement[0];
    id + 1;

    this.recipeService.addRecipe(this.newRecipe).subscribe(newRecipe => {
      newRecipe = new Recipe();
      newRecipe.vId = id;
      newRecipe.recipeName = recipeName;
      newRecipe.category = category;
      newRecipe.ingredient = ingredient[0];
      newRecipe.qty = qty[0];
      newRecipe.measurement = measurement[0];
      newRecipe.active = true;
      // this.getRecipes();
    });
  }
  
  ngOnInit() {
  }
}
