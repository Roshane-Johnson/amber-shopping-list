import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
   selector: 'app-category-edit-modal',
   templateUrl: './category-edit-modal.component.html',
   styleUrls: ['./category-edit-modal.component.scss'],
})
export class CategoryEditModalComponent implements OnInit {
   constructor(
      private categoryService: CategoryService,
      @Inject(MAT_DIALOG_DATA) public dialogData: any
   ) {}

   category: Category = this.dialogData.category;

   ngOnInit(): void {}

   updateCategory(updateForm: Category): void {
      this.categoryService
         .updateCategory(this.category._id as string, updateForm)
         .subscribe({
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
