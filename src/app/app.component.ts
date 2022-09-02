import { Component } from '@angular/core';
import { ProductResponseModel } from './models/productResponseModel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'northwind';
  user: string = "Batuhan Erol";
}
