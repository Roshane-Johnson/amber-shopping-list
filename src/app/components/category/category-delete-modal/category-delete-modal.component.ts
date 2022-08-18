import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
   selector: 'app-category-delete-modal',
   templateUrl: './category-delete-modal.component.html',
   styleUrls: ['./category-delete-modal.component.scss'],
})
export class CategoryDeleteModalComponent implements OnInit {
   constructor(
      private categoryService: CategoryService,
      @Inject(MAT_DIALOG_DATA) public dialogData: any
   ) {}

   category: Category = this.dialogData.category;

   ngOnInit(): void {}

   deleteItem(): void {
      this.categoryService
         .deleteCategory(this.category._id as string)
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
