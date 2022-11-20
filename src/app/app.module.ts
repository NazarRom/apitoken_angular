import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PlantillaService } from './services/plantilla.service';
import { PlantillaComponent } from './components/plantilla/plantilla.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, LoginComponent, HomeComponent, PlantillaComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [PlantillaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
