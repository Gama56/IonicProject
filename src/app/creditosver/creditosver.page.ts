import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-creditosver',
  templateUrl: './creditosver.page.html',
  styleUrls: ['./creditosver.page.scss'],
})
export class CreditosverPage {

  public creditos:any;
  constructor(
    private _UserService:UserService
  ) {}
  ObtenerCreditos(){
   this._UserService.getCredits().subscribe(
     Response=>{
       this.creditos = Response
       console.log(this.creditos)
     }
   )
  }
}
