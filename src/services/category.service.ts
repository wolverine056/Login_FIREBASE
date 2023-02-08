import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
data$;
  constructor(private db:AngularFireDatabase) { }

  getCategories(){
    this.data$= this.db.list('/categories');
    return this.data$;
  }
}


