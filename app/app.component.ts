import {Component} from '@angular/core';
import {ProductListComponent} from './products/product-list.component';

@Component({
    selector:'pm-app',
    template: `<div>
    <h1> This is the {{pageTitle}}!</h1>
    <book-app></book-app>
    <jhanvi-app></jhanvi-app>
    <hwjj-app></hwjj-app>
    <lists-app></lists-app>
    <pm-product></pm-product>
    </div>`
})

export class AppComponent{
   pageTitle:string="Home Page" 
}