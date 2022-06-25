import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

  constructor(private http: HttpClient) { }


  getData(cocktailName:string) {
    return this.http.get(this.url+cocktailName)
  }

  getRandom(){
    return this.http.get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  }

}
