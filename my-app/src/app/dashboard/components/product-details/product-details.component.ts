import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Food } from '../../food';
import { FoodService } from '../../food.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  food: Food = new Food;

  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private location: Location
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

}
