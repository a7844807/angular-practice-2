import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray} from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Food } from '../../food';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  foods: Food[] = [];
  foods$!: Observable<Food[]>;
  private searchTerms = new Subject<any>();
  selectedMaterial: string = "";
  selectedType: string = "";
  price: number = 0;
  foodToggle : string = "";

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

  constructor(private foodService: FoodService) { }

  ngOnInit() : void {

    this.foods$ = this.searchTerms.pipe(

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.foodService.searchFood(term)),
    );
   
  }
   
 
 /*Set value for toggle and call search function*/
  setToggleValue(term: any): void {

   this.foodToggle = term
   this.search();

  }
   
/*Search pizza based on filters*/
   search() : void{

    if(this.selectedMaterial === undefined )
      this.selectedMaterial = '';
    if(this.selectedType === undefined )
      this.selectedType = '';
    if(this.foodToggle === undefined)
      this.foodToggle = '';
    
   let term= [this.foodToggle,this.selectedMaterial,this.selectedType];
   
   // Push a search term into the observable stream.
   this.searchTerms.next(term);
  }

}
