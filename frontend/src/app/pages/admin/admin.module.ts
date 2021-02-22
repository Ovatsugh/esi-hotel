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
import { QuartosComponent } from './quartos/quartos.component';
import { QuartoFormComponent } from './quartos/quarto-form/quarto-form.component';
import { ReceptionComponent } from './reception/reception.component';
import { ReceptionFormComponent } from './reception/reception-form/reception-form.component';
import { ReceptionDetalheComponent } from './reception/reception-detalhe/reception-detalhe.component';



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
      },
      {
        path: 'quartos', component: QuartosComponent

      },
      {
        path: 'recepcao', component: ReceptionComponent
      },
      {
        path: 'recepcao/detalhe', component: ReceptionDetalheComponent
      }

    ]
  },

]

@NgModule({
  declarations: [AdminComponent, HomeComponent, ProductsComponent, ProductFormComponent, ClientesComponent,
    ClientesFormComponent, QuartosComponent, QuartoFormComponent,
    ReceptionComponent, ReceptionFormComponent],
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
