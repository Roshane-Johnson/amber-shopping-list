import { ApiResponse } from './../../interfaces/api-response';
import { ItemService } from './../../services/item.service';
import { Item } from './../../interfaces/item';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
   selector: 'app-edit-modal',
   templateUrl: './edit-modal.component.html',
   styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent implements OnInit {
   constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private itemService: ItemService,
      private categoryService: CategoryService
   ) {}

   form: Item = this.data.shoppingItem;

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

   editItem(editFormData: any): void {
      this.itemService
         .updateItem(this.data.shoppingItem._id, editFormData)
         .subscribe({
            next: (data: ApiResponse) => {
               if (data.message.includes('success')) {
                  location.reload();
               }
            },
            error: (err) => {
               console.error(err);
            },
         });
   }
}
