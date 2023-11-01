import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Products } from '../interface/products';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private _http = inject(HttpClient)

  private _getProductsSubject = new BehaviorSubject<Products[]>([]);
  public getProducts$ = this._getProductsSubject.asObservable();

  public getProducts(): void {
    this._http.get<Products[]>(`${environment.baseUrl}`).subscribe( products => {
      this._getProductsSubject.next(products);
    })
  }
}
