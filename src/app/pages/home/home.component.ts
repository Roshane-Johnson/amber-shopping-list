import { ApiResponse } from './../../interfaces/api-response';
import { ItemService } from './../../services/item.service';
import { DeleteModalComponent } from './../../components/delete-modal/delete-modal.component';
import { EditModalComponent } from './../../components/edit-modal/edit-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Item } from './../../interfaces/item';
import { Component, OnInit } from '@angular/core';

@Component({
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
   displayedColumns: string[] = [
      'name',
      'category',
      'price',
      'quantity',
      'actions',
   ];

   listItems: Item[] = [];

   constructor(private dialog: MatDialog, private itemService: ItemService) {}

   ngOnInit(): void {
      this.itemService.getItems().subscribe((resp: ApiResponse) => {
         this.listItems = resp.data;
      });
   }

   openEditModal(item: Item): void {
      this.dialog.open(EditModalComponent, {
         width: '30%',
         height: 'auto',
         data: {
            shoppingItem: item,
         },
      });
   }

   openDeleteModal(item: Item): void {
      this.dialog.open(DeleteModalComponent, {
         width: '30%',
         height: 'auto',
         data: {
            shoppingItem: item,
         },
      });
   }
}
