export class Recipe {
  id: number;
  recipeName: string;
  ingredients: Array<any>;
  ingredient: string;
  measurement: string;
  qty: number;
  directions: Array<string>;
  recipeImage: string;
  category: string;
  active: boolean;
}
