
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminUsuarioViewRoutedComponent } from './components/usuario/admin-usuario-view-routed/admin-usuario-view-routed.component';
import { AdminUsuarioPlistRoutedComponent } from './components/usuario/admin-usuario-plist-routed/admin-usuario-plist-routed.component';
import { AdminUsuarioEditRoutedComponent } from './components/usuario/admin-usuario-edit-routed/admin-usuario-edit-routed.component';
import { AdminUsuarioNewRoutedComponent } from './components/usuario/admin-usuario-new-routed/admin-usuario-new-routed.component';
export const routes: Routes = [
    { path: 'admin/usuario/plist', component: AdminUsuarioPlistRoutedComponent },
    { path: 'admin/usuario/view/:id', component: AdminUsuarioViewRoutedComponent },    
    { path: 'admin/usuario/new', component: AdminUsuarioNewRoutedComponent },
    { path: 'admin/usuario/edit/:id', component: AdminUsuarioEditRoutedComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }