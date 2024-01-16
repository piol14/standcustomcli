
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

//--

//--

//


//--

//Sin esto da error!




import { UserAjaxService } from './service/user.ajax.service.service';
import { AdminUsuarioPlistRoutedComponent } from './components/usuario/admin-usuario-plist-routed/admin-usuario-plist-routed.component';
import { AdminUsuarioViewRoutedComponent } from './components/usuario/admin-usuario-view-routed/admin-usuario-view-routed.component';
import { AdminUsuarioNewRoutedComponent } from './components/usuario/admin-usuario-new-routed/admin-usuario-new-routed.component';
import { AdminUsuarioEditRoutedComponent } from './components/usuario/admin-usuario-edit-routed/admin-usuario-edit-routed.component';
import { AdminUsuarioPlistUnroutedComponent } from './components/usuario/admin-usuario-plist-unrouted/admin-usuario-plist-unrouted.component';
import { AdminUsuarioDetailUnroutedComponent } from './components/usuario/admin-usuario-detail-unrouted/admin-usuario-detail-unrouted.component';
import { AdminUsuarioFormUnroutedComponent } from './components/usuario/admin-usuario-form-unrouted/admin-usuario-form-unrouted.component';
import { AppRoutingModule } from './app.routing.module';
import { MenuUnroutedComponent } from './components/shared/menu-unrouted/menu-unrouted.component';
import { AppComponent } from './app.component';


//--
@NgModule({
  declarations: [
    
    AppComponent,
  
    //--
    AdminUsuarioPlistRoutedComponent,
    AdminUsuarioViewRoutedComponent,
    AdminUsuarioNewRoutedComponent,
    AdminUsuarioEditRoutedComponent,
    AdminUsuarioPlistUnroutedComponent,
    AdminUsuarioDetailUnroutedComponent,
    AdminUsuarioFormUnroutedComponent,
    MenuUnroutedComponent
   
     


  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
   
    
   
   
  
    
  ],
  providers: [
    
    UserAjaxService,
   
   

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }