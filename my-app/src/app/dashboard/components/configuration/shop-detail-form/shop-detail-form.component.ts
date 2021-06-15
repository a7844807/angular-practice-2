/**import { ShopService } from './../../../shop.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ShopDetail } from 'src/app/dashboard/shopDetail';

@Component({
  selector: 'app-shop-detail-form',
  templateUrl: './shop-detail-form.component.html',
  styles: [
  ]
})
export class ShopDetailFormComponent implements OnInit {

  constructor(public service: ShopService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.service.formData.shopDetailId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postShopDetail().subscribe(
        (      res: any) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.success('Submitted successfully', 'Shop Detail Register')
      },
        (      err: any) => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putShopDetail().subscribe(
        (      res: any) => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Updated successfully', 'Shop Detail Register')
      },
        (      err: any) => { console.log(err); }
    );
  }


  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new ShopDetail();
  }

}**/