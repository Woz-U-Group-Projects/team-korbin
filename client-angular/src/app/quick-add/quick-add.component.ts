import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quick-add',
  templateUrl: './quick-add.component.html',
  styleUrls: ['./quick-add.component.css']
})
export class QuickAddComponent {
  quickAddForm = this.fb.group({
    recipe: null,
    addIngredientOne: [null, Validators.required],
    addQtyOne: null,
    addNextIngredient: null,
    addImage: null,
    selectCat: ['entree', Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('Thanks for adding your recipe!');
  }
}
