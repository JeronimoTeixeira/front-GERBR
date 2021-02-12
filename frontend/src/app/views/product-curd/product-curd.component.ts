import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-product-curd',
  templateUrl: './product-curd.component.html',
  styleUrls: ['./product-curd.component.css']
})
export class ProductCurdComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigateProductCreat(): void{
    this.router.navigate(['/products/create'])
  }

}
