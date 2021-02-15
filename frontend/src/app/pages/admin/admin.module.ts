import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskInputMode, NgxCurrencyModule } from 'ngx-currency';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



const rotas: Routes = [
  {
    path: '', 
    component: AdminComponent,
    children: [
      {
        path: '', component: HomeComponent
      },
      {
        path: 'products', component: ProductsComponent
      }
    ] 
  },
  
]

@NgModule({
  declarations: [AdminComponent, HomeComponent, ProductsComponent, ProductFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rotas),
    NgbModule,
    NgxCurrencyModule.forRoot({
      align: "right",
      allowNegative: true,
      allowZero: true,
      decimal: ",",
      precision: 2,
      prefix: "R$ ",
      suffix: "",
      thousands: ".",
      nullable: true,
      min: null,
      max: null,
      inputMode: CurrencyMaskInputMode.FINANCIAL
    })

  ],
})
export class AdminModule { }
