import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageCategoriesComponent } from './pages/manage-categories/manage-categories.component';

const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'categories', component: ManageCategoriesComponent },
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule {}
