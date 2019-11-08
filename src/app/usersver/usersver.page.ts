import { Component } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-usersver',
  templateUrl: './usersver.page.html',
  styleUrls: ['./usersver.page.scss'],
})
export class UsersverPage   {

  private usuarios:any;
  constructor(
    private _UserService:UserService
  ) { }



  ObtenerUsuarios(){
   this._UserService.getUser().subscribe(
     Response=>{
       this.usuarios = Response
       console.log(this.usuarios)

     }
   );
  }

  Eliminar(Id){
    this._UserService.deleteUser(Id).subscribe(
      page => {
        console.log("usuario eliminado correctamente") 
          window.location.reload();
      }
    )
  }
}
