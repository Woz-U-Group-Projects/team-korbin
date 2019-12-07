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

  addRecipe() {
    const recipeName = this.newRecipe.recipeName;
    const id = this.newRecipe.id;
    const category = this.newRecipe.category;
    id + 1;

    this.recipeService.addRecipe(this.newRecipe).subscribe(newRecipe => {
      newRecipe = new Recipe();
      newRecipe.id = id;
      newRecipe.recipeName = recipeName;
      newRecipe.category = category;
      newRecipe.complete = true;
    });
  }
  
  ngOnInit() {
  }
}
