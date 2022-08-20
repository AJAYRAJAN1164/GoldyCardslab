import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefualtLayoutComponent } from './layout/defualt_layout/defualt-layout/defualt-layout.component';
import { NavbarComponent } from './layout/defualt_layout/defualt-layout/navbar/navbar/navbar.component';
import { FooterComponent } from './layout/defualt_layout/defualt-layout/footer/footer/footer.component';
// import third-party module
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
@NgModule({
  declarations: [
    AppComponent,
    DefualtLayoutComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
