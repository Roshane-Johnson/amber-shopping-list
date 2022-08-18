import { ApiResponse } from './../../interfaces/api-response';
import { ItemService } from './../../services/item.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
   selector: 'app-create-modal',
   templateUrl: './create-modal.component.html',
   styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit {
   constructor(
      private itemService: ItemService,
      private categoryService: CategoryService
   ) {}

   categories: Category[] = [];

   ngOnInit(): void {
      this.categoryService.getCategories().subscribe({
         next: (resp: ApiResponse) => {
            if (resp.message.includes('success')) {
               this.categories = resp.data;
            }
         },
         error: (err) => {
            console.error(err);
         },
      });
   }

   createItem(createFormData: any): void {
      this.itemService.createItem(createFormData).subscribe({
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
