import { Component } from '@angular/core';
import {CartService} from './cart.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expresslab';

  show: boolean = false;
  cartlist: any;

  constructor(private cartservice: CartService) {
    this.cartservice.getAllItems().subscribe(response => {
      this.cartlist = response;
    });
  }

  toggleAdd(){
    this.show = !this.show;
  }

  toggleForm(index) {
    this.cartlist[index].beingUpdated = !this.cartlist[index].beingUpdated;
  }


  addNewItem(form) {
    this.cartservice.addItem({...form.value}).subscribe(response => {
      this.cartlist = response;
    });
   }
  
   deleteAnItem(id) {
    this.cartservice.removeItem(id).subscribe(response => {
      this.cartlist = response;
    });
  }

  updateAnItem(item) {
    this.cartservice.updateItem(item).subscribe(response => {
      this.cartlist = response;
    });
  }

}
