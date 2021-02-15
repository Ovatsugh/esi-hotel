import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  {
    path: "", loadChildren: () => import("./pages/admin/admin.module").then(res => res.AdminModule)
  },
  {
    path: "auth", loadChildren: () => import("./pages/auth/auth.module").then(res => res.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
