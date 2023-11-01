import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenubarModule } from 'primeng/menubar';
import { RouterLink } from '@angular/router';
import { BadgeModule } from 'primeng/badge';
import { AsyncPipe, NgIf } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
import { SearchBarComponent } from "../search-bar/search-bar.component";

@Component({
    selector: 'app-header',
    standalone: true,
    template: `<p-toolbar>
    <div class="p-toolbar-group-start gap-3 ml-2">
      <h1 routerLink="/" style="color: green;">MATHEUS - SHOP</h1>
    </div>
    <div>
      <app-search-bar />
    </div>
    <div
      class="p-toolbar-group-end gap-5 margin-right: 2"
      style="margin-right: 5rem"
    >
      <i
        routerLink="/products/cart"
        class="pi pi-cart-plus"
        style="font-size: 2rem; color: green; margin-right: 2"
      ></i>
      <i
        pi-cog
        class="pi pi-user"
        style="font-size: 2rem; color: green;"
        routerLink="account"
      ></i>
      <i
        class="pi pi-cog"
        style="font-size: 2rem; color: green;"
      ></i>
    </div>
  </p-toolbar>`,
    imports: [
        CommonModule,
        PanelModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
        InputSwitchModule,
        MenubarModule,
        RouterLink,
        BadgeModule,
        NgIf,
        AsyncPipe,
        DialogModule,
        SearchBarComponent
    ]
})
export class HeaderComponent {}
