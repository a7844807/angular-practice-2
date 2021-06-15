import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../../food';
import { FoodService } from '../../food.service';
import { Observable } from 'rxjs';
//import { DialogComponent, DialogConfig } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  food: Food = new Food;
  visible:boolean = false;
  save:boolean = true;
  display='none';
  displaySign='none';
  displayMaterial='none';
  displayType='none';
  signInput:boolean = false;
  signMaterial:boolean = false;
  signType:boolean = false;

  editModeToggle =false;
  item: any = {
    price : '',
    material: '',
    type: ''
  }

  oldItemData = {
    price : '',
    material: '',
    type: ''
  } 
  //confirm$!: Observable<boolean>;
  materials = [
    {value: '牛肉', viewValue: '牛肉'},
    {value: '鸡肉', viewValue: '鸡肉'},
    {value: '羊肉', viewValue: '羊肉'},
    {value: '鱼肉', viewValue: '鱼肉'}
  ];

  types = [
    {value: '炒菜', viewValue: '炒菜'},
    {value: '炖菜', viewValue: '炖菜'},
    {value: '汤', viewValue: '汤'}
  ];

  foods = [
    {value: '辣', viewValue: '辣'},
    {value: '不辣', viewValue: '不辣'}
  ];

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private location: Location,
    //private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getFood();
  }

  getFood(): void {
    const id = +Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.getFood(id)
      .subscribe(food => this.food = food);
  }

  goback(): void{
    this.location.back();
  }

  public saveFood(food: Food, newDetail:any) :void {
    const type = +String(this.route.snapshot.paramMap.get('type'));
    this.foodService.getFood(type).forEach(food => this.food.type = newDetail);
  }

  onclick()
  {
    this.visible = !this.visible;
    this.save = !this.save;
    this.oldItemData = JSON.parse(JSON.stringify(this.item));
    this.editModeToggle = true;
  }

  closeWin(){
    this.display='none';
    this.visible = !this.visible;
    this.save = !this.save;
    this.editModeToggle = false;
    this.item = this.oldItemData;
    this.signInput = false
  }

  openWin(){
    this.display='block';
  }

  edit(){
    this.oldItemData = JSON.parse(JSON.stringify(this.item));
   // this.editModeToggle = true;
    this.signInput = true
  }

  openSignWin(){
    this.displaySign='block';
  }

  saveSign() {
    this.displaySign='none';
    // some stuff happens
    this.signInput = false;
    this.food.price = Number(this.item.price);
  }

  cancelSign() {
    this.displaySign='none';
    this.signInput = false;
    this.item = this.oldItemData;
  }

  openMaterialWin(){
    this.displayMaterial='block';
  }

  editMaterial(){
    this.oldItemData = JSON.parse(JSON.stringify(this.item));
   // this.editModeToggle = true;
    this.signMaterial = true
  }

  saveMaterial() {
    // some stuff happens
    this.displayMaterial='none';
    this.signMaterial = false;
    this.food.material = this.item.material;
  }

  cancelMaterial() {
    this.signMaterial = false;
    this.item = this.oldItemData;
    this.displayMaterial='none';
  }

  openTypeWin(){
    this.displayType='block';
  }

  editType(){
    this.oldItemData = JSON.parse(JSON.stringify(this.item));
   // this.editModeToggle = true;
    this.signType = true
  }

  saveType() {
    this.displayType='none';
    // some stuff happens
    this.signType = false;
    this.food.type = this.item.type;
  }

  cancelType() {
    this.displayType='none';
    this.signType = false;
    this.item = this.oldItemData;
  }

  saveChange(){
    this.display='none';
    this.visible = !this.visible;
    this.save = !this.save;
    this.editModeToggle = false;
    this.food.price=Number(this.item.price);
    this.food.material=this.item.material;
    this.food.type=this.item.type;
    this.signInput = false
    //console.log('item:', this.food.price);
  }

  // showDialog(): void {
  //   const dialog: DialogConfig = {
  //     content: '确认保存已修改信息？',
  //     close: '取消',
  //     ok: '保存'
  //   };
  //   const dialogRef = this.dialog.open(DialogComponent, { width: '287px', data: dialog });
  //   this.confirm$ = dialogRef.afterClosed()
  // }

}
