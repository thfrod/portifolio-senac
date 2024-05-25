import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { AboutComponent } from "./about/about.component";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { MaterialModule } from "./material.module";
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, AboutComponent, ProfileComponent],
  imports: [MaterialModule, BrowserModule, AppRoutingModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
