import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { ProductComponent } from './product/product.component';

@NgModule({ // decarator
  declarations: [
    AppComponent,
    GreetComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [], // dependency injection
  bootstrap: [AppComponent]
})
export class AppModule { }
