import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test description',
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.loveandlemons.com%2Fpantry-recipes%2F&psig=AOvVaw0suIY_uIAi3Ap_4kq6YHWt&ust=1675207453293000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKikp5u48PwCFQAAAAAdAAAAABAE'
    ),
  ];
}
