import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from 'src/app/data-acess/service/products.service';
import { NgFor, NgIf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Products } from 'src/app/data-acess/interface/products';

import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, AsyncPipe, CardModule, ButtonModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  public product!: Products[];

  private _productsService = inject(ProductsService);

  public getProducts$ = this._productsService.getProducts$;

  ngOnInit(): void {
    this._productsService.getProducts();
  }
}
