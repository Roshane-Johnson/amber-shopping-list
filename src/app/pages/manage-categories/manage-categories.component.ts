import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDeleteModalComponent } from 'src/app/components/category/category-delete-modal/category-delete-modal.component';
import { CategoryEditModalComponent } from 'src/app/components/category/category-edit-modal/category-edit-modal.component';
import { DeleteModalComponent } from 'src/app/components/delete-modal/delete-modal.component';
import { EditModalComponent } from 'src/app/components/edit-modal/edit-modal.component';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Category } from 'src/app/interfaces/category';
import { Item } from 'src/app/interfaces/item';
import { CategoryService } from 'src/app/services/category.service';

@Component({
   templateUrl: './manage-categories.component.html',
   styleUrls: ['./manage-categories.component.scss'],
})
export class ManageCategoriesComponent implements OnInit {
   displayedColumns: string[] = ['name', 'actions'];

   listItems: Item[] = [];
   categories: Category[] = [];

   constructor(
      private dialog: MatDialog,
      private categoryService: CategoryService
   ) {}

   ngOnInit(): void {
      this.categoryService.getCategories().subscribe({
         next: (resp: ApiResponse) => {
            this.categories = resp.data;
         },
         error: (err) => {
            console.error(err);
         },
      });
   }

   openEditModal(item: Item): void {
      this.dialog.open(CategoryEditModalComponent, {
         width: '30%',
         height: 'auto',
         data: {
            category: item,
         },
      });

      console.log('Item', item);
   }

   openDeleteModal(item: Item): void {
      this.dialog.open(CategoryDeleteModalComponent, {
         width: '30%',
         height: 'auto',
         data: {
            category: item,
         },
      });
   }
}
