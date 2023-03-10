import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeListItemComponent } from './recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeListItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeListItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    RecipeRoutingModule,
  ],
})
export class RecipesModule {}
