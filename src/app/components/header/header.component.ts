import { MatDialog } from '@angular/material/dialog';
import { CreateModalComponent } from './../create-modal/create-modal.component';
import { Component, OnInit } from '@angular/core';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { NavigationStart, Router } from '@angular/router';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
   constructor(private dialog: MatDialog, private router: Router) {}

   manageButtonText: string = 'Manage Categories';
   manageButtonLink: string = '/';
   showAddShoppingItem: Boolean = true;

   ngOnInit(): void {
      this.router.events.subscribe((e: any) => {
         if (e instanceof NavigationStart) {
            switch (e.url) {
               case '/categories':
                  this.manageButtonText = 'Manage Shopping Items';
                  this.manageButtonLink = '/';
                  this.showAddShoppingItem = false;
                  break;
               case '/':
                  this.manageButtonText = 'Manage Categories';
                  this.manageButtonLink = '/categories';
                  this.showAddShoppingItem = true;
                  break;
               default:
                  break;
            }
         }
      });
   }

   openCreateDialog(): void {
      this.dialog.open(CreateModalComponent, {
         width: '30%',
         height: 'auto',
      });
   }

   openCategoryDialog(): void {
      this.dialog.open(CreateCategoryComponent, {
         width: '30%',
         height: 'auto',
      });
   }
}
