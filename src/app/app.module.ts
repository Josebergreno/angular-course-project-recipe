import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list-feature/shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list-feature/shopping-list-edit/shopping-list-edit.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
