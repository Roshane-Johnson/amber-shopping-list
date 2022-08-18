import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CurrencyiPipe } from './pipes/currencyi.pipe';
import { EditModalComponent } from './components/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './components/delete-modal/delete-modal.component';
import { CreateModalComponent } from './components/create-modal/create-modal.component';
import { FormsModule } from '@angular/forms';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { ManageCategoriesComponent } from './pages/manage-categories/manage-categories.component';
import { CategoryEditModalComponent } from './components/category/category-edit-modal/category-edit-modal.component';
import { CategoryDeleteModalComponent } from './components/category/category-delete-modal/category-delete-modal.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      HomeComponent,
      CurrencyiPipe,
      EditModalComponent,
      DeleteModalComponent,
      CreateModalComponent,
      CreateCategoryComponent,
      ManageCategoriesComponent,
      CategoryEditModalComponent,
      CategoryDeleteModalComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MaterialModule,
      BrowserAnimationsModule,
      HttpClientModule,
      FormsModule,
   ],
   providers: [],
   bootstrap: [AppComponent],
})
export class AppModule {}
