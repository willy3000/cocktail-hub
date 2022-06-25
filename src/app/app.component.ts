import { Component } from '@angular/core';
import { CocktailService } from './cocktail.service';
import { listAnimation, fadeAnimation } from './cocktail.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [listAnimation, fadeAnimation]
})
export class AppComponent {
  title = 'cocktail-hub';
  cocktailName: string = "";
  cocktaildata: any;
  imgsize = "50px"
  specific_item: any;

  switch_page = false

  ngOnInit(){
    return this.service.getRandom().subscribe((dat)=>{
      this.cocktaildata=dat
      console.log(this.cocktaildata.drinks)
    })
      
    
    }


  constructor(private service: CocktailService){}


  getCocktailData(){
    return this.service.getData(this.cocktailName).subscribe((data)=>{
      this.cocktaildata = data
    })
  }

  getRandomCocktail(){
    return this.service.getRandom().subscribe((dat)=>{
      this.cocktaildata=dat
      console.log(this.cocktaildata.drinks)
    })
  }

  specificDrink(item:any){
    console.log(item)
    this.specific_item = item
    this.switch_page = true
  }

  back(){
    this.switch_page = false
  }


}
