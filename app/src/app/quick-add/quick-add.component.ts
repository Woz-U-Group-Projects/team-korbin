import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { recipe } from '../../../../routes/recipes.js';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
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

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  constructor(private fb: FormBuilder, private http: HttpClient, router: Router) {
  }
  onSubmit() {
    this.submitted = true;
    // this.recipe = recipeName;
  }

  // const data: any = Object.assign(this.quickAddForm.value);
  // this.http.post('/addnew', data).subscribe((data: any) => {
  //     const path = '/recipe/' + data.recipe.rId;
  //     this.Router.navigate([path]);      //
  //     alert('Thanks for adding your recipe!');  //
  }
