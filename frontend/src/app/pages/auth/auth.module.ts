import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';

const rotas: Routes = [
  {
    path: '', component: AuthComponent
  }
]

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(rotas)
  ]
})
export class AuthModule { }
