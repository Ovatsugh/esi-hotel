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
import { ClientesComponent } from './clientes/clientes.component';
import { ClientesFormComponent } from './clientes/clientes-form/clientes-form.component';
import { NgxMaskModule } from 'ngx-mask';



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
      },
      {
        path: 'clientes', component: ClientesComponent
      }
    ] 
  },
  
]

@NgModule({
  declarations: [AdminComponent, HomeComponent, ProductsComponent, ProductFormComponent, ClientesComponent, ClientesFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(rotas),
    NgbModule,
    NgxMaskModule.forRoot(),
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
