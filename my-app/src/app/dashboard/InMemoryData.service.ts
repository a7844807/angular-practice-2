import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foods = [
      { id: 11, name: '青椒肉丝',init:'v', food: '辣', image: 'assets/1.png',price: 20, material: '猪肉', type: '炒菜'},
      { id: 12, name: '辣子鸡',init:'v', food: '辣', image: './assets/2.png',price: 30, material: '鸡肉', type: '炒菜' },
      { id: 13, name: '干炒和牛',init:'n', food: '不辣', image: 'assets/3.png',price: 20, material: '牛肉', type: '炒菜' },
      { id: 14, name: '排骨炖豆角',init:'n', food: '辣', image: 'assets/4.png',price: 30, material: '鱼肉', type: '炖菜' },
      { id: 15, name: '水煮牛肉',init: 'v', food: '辣', image: 'assets/5.png',price: 20, material: '牛肉', type: '炒菜' },
      { id: 16, name: '溜肉段',init:'n', food: '不辣', image: 'assets/6.png',price: 35, material: '猪肉', type: '炒菜'},
      { id: 17, name: '干锅羊排',init:'v', food: '辣', image: 'assets/7.png',price: 15, material: '羊头', type: '炒菜' },
      { id: 18, name: '排骨汤',init:'n', food: '不辣', image: 'assets/8.png',price: 40, material: '猪肉', type: '汤' },

    ];
    return {foods};
  }
}