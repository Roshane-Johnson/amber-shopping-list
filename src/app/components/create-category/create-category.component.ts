import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
   selector: 'app-create-category',
   templateUrl: './create-category.component.html',
   styleUrls: ['./create-category.component.scss'],
})
export class CreateCategoryComponent implements OnInit {
   constructor(private categoryService: CategoryService) {}

   ngOnInit(): void {}

   createCategory(createForm: Category): void {
      this.categoryService.createCategory(createForm).subscribe({
         next: (resp: ApiResponse) => {
            if (resp.message.includes('success')) {
               location.reload();
            }
         },
         error: (err) => {
            console.error(err);
         },
      });
   }
}
