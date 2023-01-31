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
      'tomato soup',
      'yummy yummy mater soup',
      'https://cdn.loveandlemons.com/wp-content/uploads/2020/03/pantry-recipes-2.jpg'
    ),
    new Recipe(
      'beef soup',
      'yummy yummy beef soup',
      'https://www.recipetineats.com/wp-content/uploads/2019/05/Vegetable-Beef-Soup_3.jpg'
    ),
    new Recipe(
      'au gratin',
      'yummy yummy au gratin',
      'https://www.recipetineats.com/wp-content/uploads/2014/12/Potatoes-au-gratin_2.jpg'
    ),
  ];
}
