import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppComponent} from './app.component';
import{BookComponent} from './book.component';
import {JhanviComponent} from './jhanvi.component';
import {HWJJ} from './hwjj.component';
import {ListsComponent} from './list.component';
import {ProductListComponent} from './products/product-list.component';


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    BookComponent,
    JhanviComponent,
    HWJJ,
    ListsComponent,
    ProductListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
