import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  // catId=3
  catId: any;
  subId: any;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {
    // getting  catId and subId dynamically
    activatedRoute.params.subscribe((val) => {
      this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
      this.subId = this.activatedRoute.snapshot.paramMap.get('subId');

      if (this.subId != null) {
        //load cateory wise products if subId is present
        this.dataService
          .getProductBySubId(this.subId)
          .subscribe((response: any) => {
            console.log('res', response);
            this.products = response.data;
          });
      } else {
        //else load all the products
        this.dataService
          .getProductByCatId(this.catId)
          .subscribe((response: any) => {
            this.products = response.data;
          });
      }
    });
  }

  ngOnInit(): void {}
}
