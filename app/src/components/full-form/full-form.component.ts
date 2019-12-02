import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FullFormService } from '../services/full-form.service';
import { Recipe } from '../models/recipe';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-full-form',
  templateUrl: './full-form.component.html',
  styleUrls: ['./full-form.component.css']
})

export class FullFormComponent implements OnInit {
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

  constructor(private quickAddService: FullFormService, private fb: FormBuilder) { }
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
