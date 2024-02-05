import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class AppService {

  constructor() { }
  public getDetailById(index:number):string{
    return "BookDetails"
  }
}
