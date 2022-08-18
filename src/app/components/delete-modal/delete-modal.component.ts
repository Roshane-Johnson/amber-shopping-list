import { ItemService } from './../../services/item.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/interfaces/item';
import { ApiResponse } from 'src/app/interfaces/api-response';

@Component({
   selector: 'app-delete-modal',
   templateUrl: './delete-modal.component.html',
   styleUrls: ['./delete-modal.component.scss'],
})
export class DeleteModalComponent implements OnInit {
   constructor(
      private itemService: ItemService,
      @Inject(MAT_DIALOG_DATA) public data: any
   ) {}

   ngOnInit(): void {}

   deleteItem(): void {
      const item: Item = this.data.shoppingItem;
      this.itemService.deleteItem(item._id as string).subscribe({
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
