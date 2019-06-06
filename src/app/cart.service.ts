import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class CartService {

  constructor(private http: HttpClient) { }

  getAllItems() {
    return this.http.get("/api/cartitems", { responseType: "json"});
  }

  addItem(item) {
    return this.http.post("/api/cartitems", item);
  }

  removeItem(id) {
    return this.http.delete(`/api/cartitems/${id}`, { responseType: "json"});
  }

  updateItem(item) {
    return this.http.put(`/api/cartitems/${item.id}`, item, { 
      responseType: "json"});
  }
}
