import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  constructor(private dataservice: DataService, private router: Router) {
    this.dataservice.getCategory().subscribe((response: any) => {
      this.categories = response.data;
    });
  }

  ngOnInit(): void {}

  onClickHandler(category: any) {
    // this.router.navigateByUrl('about');
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['products', category.catId]);
    console.log('cat', category);
    // the above line passes the catId to router page (products/:id) .then to subcategory and products component (this.catId=....)
  }
}
