import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { ProductsListComponent } from './features/products-list/products-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, ButtonModule, HeaderComponent, ProductsListComponent],
})
export class AppComponent {
  title = 'my-shop';
}
