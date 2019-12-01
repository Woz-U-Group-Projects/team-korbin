import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuickAddService } from '../services/quick-add.service';
import { Recipe } from '../models/recipe';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
// export class QuickAddComponent implements OnInit {

//   constructor(private fb: FormBuilder, private http: HttpClient, router: Router) {
//   }

//   const data: any = Object.assign(this.quickAddForm.value);


//   //     const path = '/recipe/' + data.recipe.rId;
//   //     this.Router.navigate([path]);      //
//   //     alert('Thanks for adding your recipe!');  //
// }


export class QuickAddComponent implements OnInit {
  submitted = false;
  hasUnitNumber = false;

  quickAddForm = this.fb.group({
    recipe: null,
    addIngredientOne: [null, Validators.required],
    addQtyOne: null,
    addNextIngredient: null,
    addImage: null,
    selectCat: ['entree', Validators.required]
  });

  constructor(private quickAddService: QuickAddService, private fb: FormBuilder) { }
  newRecipe: Recipe = new Recipe();
  recipes: Recipe[] = [];

  getRecipes() {
    this.quickAddService.getRecipes().subscribe(recipes => (this.recipes = recipes));
  }

  addRecipe() {
    this.quickAddService.addRecipe(this.newRecipe).subscribe(result => {
      this.getRecipes();
      this.newRecipe = new Recipe();
    });
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.submitted = true;
    this.addRecipe();
  }
}
