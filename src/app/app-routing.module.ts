import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';
import { IsAdminGuard } from './core/is-admin.guard';
import { IsConnectGuard } from './core/is-connect.guard';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [IsConnectGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [IsAdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
