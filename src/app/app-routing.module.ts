import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  {
    path: 'products/:catId',
    component: ProductsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'subProducts/:catId/:subId',
    component: ProductsPageComponent,
    canActivate: [AuthGuard],
  },
  //   { path: 'products/details', component: ProductDetailPageComponent },
  {
    path: 'products/details/:id',
    component: ProductDetailPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'about', component: AboutPageComponent, canActivate: [AuthGuard] },
  { path: 'contact', component: ContactPageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
