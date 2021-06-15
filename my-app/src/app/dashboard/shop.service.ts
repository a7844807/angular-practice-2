/**import { Injectable } from '@angular/core';
import { ShopDetail } from './shopDetail';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'any'
})
export class ShopService {

  constructor(private http: HttpClient) { }

  readonly baseURL = 'http://localhost:4200/api/ShopDetail'
  formData: ShopDetail = new ShopDetail();
  list: ShopDetail[] = [];

  postShopDetail() {
    return this.http.post(this.baseURL, this.formData);
  }

  putShopDetail() {
    return this.http.put(`${this.baseURL}/${this.formData.shopDetailId}`, this.formData);
  }

  deleteShopDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as ShopDetail[]);
  }


}**/
