import {Component} from '@angular/core';

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
})
export class ProductListComponent{
    pageTitle: string="Product List";
    products:any[]=[
        {
            "productId":1,
            "productName": "Leaf Rake",
            "productCode":"GDN-0011",
            "releaseDate":"March 19,2016",
            "description":"Leaf Rake with 48 inch wooden handle",
            "price": 23.33,
            "starRating": 4.5,
            "imageUrl": "https://www.google.com/search?q=leaf+rake&source=lnms&tbm=isch&sa=X&ved=0ahUKEwjq28i5ku_WAhUHvRoKHUuVDYAQ_AUICygC&biw=1366&bih=637"
        },
        {
            "productId":2,
            "productName": "Garden Cart",
            "productCode":"GDN-0023",
            "releaseDate":"October 13,2017",
            "description":"One gallon",
            "price":12.23,
            "starRating":4.9,
            "imageUrl":"https://www.google.com/search?biw=1366&bih=637&tbm=isch&sa=1&q=garden+cart&oq=garden+cart&gs_l=psy-ab.3..0l10.45430.48055.0.48241.11.11.0.0.0.0.277.1755.0j7j3.10.0....0...1.1.64.psy-ab..1.10.1752...0i67k1.0.3rM-6ZQOaKc"
        }
    ]
}
