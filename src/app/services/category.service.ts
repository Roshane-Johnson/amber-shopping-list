import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../interfaces/api-response';
import { Category } from '../interfaces/category';

@Injectable({
   providedIn: 'root',
})
export class CategoryService {
   constructor(private http: HttpClient) {}

   /**
    * http://localhost:3000/category/
    */
   private apiUrl = environment.apiUrl + '/category/';

   createCategory(newCategory: Category) {
      return this.http.post<ApiResponse>(this.apiUrl, newCategory);
   }

   getCategories() {
      return this.http
         .get<ApiResponse>(this.apiUrl)
         .pipe(tap((categories: any) => console.log(categories)));
   }

   getCategory(categoryID: string) {
      return this.http.get<ApiResponse>(this.apiUrl + categoryID);
   }

   updateCategory(categoryID: string, updatedCategory: Category) {
      return this.http.patch<ApiResponse>(
         this.apiUrl + categoryID,
         updatedCategory
      );
   }

   deleteCategory(categoryID: string) {
      return this.http.delete<ApiResponse>(this.apiUrl + categoryID);
   }
}
