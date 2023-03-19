import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css','../../home/home.component.css']
})
export class ProductsDetailsComponent implements OnInit {
  id: number;
  productDetails:any;
  pictures:any;
  constructor(private router: ActivatedRoute ,private httpClient: HttpClient,) { 
    this.id = this.router.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getSpecificProductDetails(this.id);
  }
  getSpecificProductDetails(id:number){
    this.httpClient
    .get('/assets/jsonData/productsDetails.json')
    .subscribe((formFields: any) => {
       this.productDetails = formFields.product_details.find((o: { product_id: number; }) => o.product_id == this.id);

       this.pictures =  this.productDetails?.images;
    });
}
}
