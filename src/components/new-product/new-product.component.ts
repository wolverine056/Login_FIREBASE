import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { CategoryService } from 'src/services/category.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
category$;
  constructor(catdb:CategoryService, private db:AngularFireDatabase ) {
    //this.category$=catdb.getCategories();
    this.category$=db.list('/categories')
    console.log(this.category$)
   }

  ngOnInit(): void {
  }

}
