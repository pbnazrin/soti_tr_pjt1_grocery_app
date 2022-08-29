import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css'],
})
export class SubCategoryComponent implements OnInit {
  subCategories: any[] = [];
  // catId=3
  catId;
  subCategory: any;

  // we have to inject dependencies in the constructor
  constructor(
    private dataServices: DataService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // getting  catId
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');

    this.dataServices
      .getSubCategoryByCatId(this.catId)
      .subscribe((response: any) => {
        this.subCategories = response.data;
      });
  }

  ngOnInit(): void {}

  onClickHandler(subCategory: any) {
    // this.router.navigateByUrl('about');
    // this.router.routeReuseStrategy.shouldReuseRoute = function () {
    //   return false;
    // };
    // this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['subProducts', subCategory.catId, subCategory.subId]);
    // this.router.navigate(['subProducts', subCategory.catId, subCategory.subId]).then(page => { window.location.reload(); });;
    console.log('subId0', subCategory);
    // the above line passes the catId to router page (products/:id) .then to subcategory and products component (this.catId=....)
  }
}
