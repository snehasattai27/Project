import { Component, OnInit } from '@angular/core';
import { ProductsapiService } from '../productsapi.service';


@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
  title = 'product';
  currenttab = 0;
  products: Array<any> = [];
  constructor(private productSvc: ProductsapiService) { }

  

  ngOnInit(): void {
  }
  onLoad() {
    const self = this;
    this.productSvc.getProducts().subscribe((data: any) => this.products = data);
  }
  onbuy(product: any) {
    console.log('Product added to the Cart...' + product.name + ' ' + product.price);
  }
  isTabSelected(tabIndex: number) {
    return this.currenttab === tabIndex;
  }
  onTabChange(event: any, tabIndex: number) {
    event.preventDefault();
    this.currenttab = tabIndex;
    console.log('Tab Selected: ' + this.currenttab);
  }

}
