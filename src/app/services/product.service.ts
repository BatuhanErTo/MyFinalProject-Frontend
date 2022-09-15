import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { respondeModel} from '../models/respondeModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44388/api/";
  constructor(private httpClient: HttpClient) { }
  getProducts() : Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  getProductsByCategory(categoryId : number) : Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
  add(product:Product):Observable<respondeModel>{
    return this.httpClient.post<respondeModel>(this.apiUrl+"products/add",product);
  }
}
