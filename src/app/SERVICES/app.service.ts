import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  public getDetailById(index:number):string{
    return "BookDetails"
  }
}
